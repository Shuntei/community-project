import express from "express";
import multer from "multer";
import db from "./../../utils/linda/mysql2-connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const output = {
    success: false,
    code: 0,
    error: "",
    data: {
      id: 0,
      username: "",
      token: "",
    },
  };

  const { email, password, phone, username, birthday } = req.body;

  const usernameSql = `SELECT username FROM mb_user WHERE username LIKE ?`;
  const [usernameRows] = await db.query(usernameSql, [`%${username}%`]);
  const emailSql = `SELECT email FROM mb_user WHERE email LIKE ?`;
  const [emailRows] = await db.query(emailSql, [`%${email}%`]);

  if (usernameRows.length) {
    output.success = false;
    output.code = 1;
    output.error = "Username exist";
  }

  if (emailRows.length) {
    output.success = false;
    output.code = 2;
    output.error = "Email exist";
  }

  if (usernameRows.length && emailRows.length) {
    output.success = false;
    output.code = 3;
    output.error = "Email and username both exist";
  }

  if (!usernameRows.length && !emailRows.length) {
    const hash = await bcrypt.hash(password, 10);

    const sql = `INSERT INTO mb_user
    (username, 
    email, 
    phone, 
    password, 
    birthday, 
    created_at) 
    VALUES (?, ?, ?, ?, ?, NOW())`;

    try {
      const [rows] = await db.query(sql, [
        username,
        email,
        phone,
        hash,
        birthday,
      ]);
      output.success = !!rows.affectedRows;

      if (output.success) {
        const sql = "SELECT * FROM mb_user WHERE username=?";
        const [rows] = await db.query(sql, username);

        const token = jwt.sign(
          { id: rows[0].id, username: rows[0].username },
          process.env.JWT_SECRET
        );

        output.data = {
          id: rows[0].id,
          username: rows[0].username,
          token,
        };
      }
    } catch (ex) {
      console.log(ex);
    }
  }

  res.json(output);
});

router.post("/login", async (req, res) => {
  const output = {
    success: false,
    code: 0,
    error: "",
    data: {
      id: 0,
      username: "",
      token: "",
    },
  };

  const { account, password } = req.body;

  const usernameSql = `SELECT * FROM mb_user WHERE username LIKE ?`;
  const [usernameRows] = await db.query(usernameSql, [`%${account}%`]);
  const emailSql = `SELECT * FROM mb_user WHERE email LIKE ?`;
  const [emailRows] = await db.query(emailSql, [`%${account}%`]);

  if (!usernameRows.length && !emailRows.length) {
    (output.success = false), (output.code = 1);
    output.error = "Account or password is wrong";
    return res.json(output);
  }

  const row = usernameRows.length ? usernameRows[0] : emailRows[0];

  const result = await bcrypt.compare(password, row.password);
  if (result) {
    output.success = true;

    const token = jwt.sign(
      {
        id: row.id,
        account: row.username,
      },
      process.env.JWT_SECRET
    );

    // TODO:
    output.data = {
      id: row.id,
      username: row.username,
      token,
    };
  } else {
    output.code = 2;
    output.error = "Account or password is wrong";
  }

  res.json(output);
});

router.post("/google-login", async (req, res) => {
  const output = {
    success: false,
    code: 0,
    error: "",
    body: req.body,
    data: {
      id: 0,
      username: "",
      token: "",
    },
    profile: {
      profileUrl: ""
    }
  };

  const { account, username, photoUrl } = req.body;
  console.log({ account, username, photoUrl });

  const emailSql = `SELECT * FROM mb_user WHERE email LIKE ?`;
  const [emailRows] = await db.query(emailSql, [`%${account}%`]);

  if (!emailRows.length) {
    const userSql = `INSERT INTO mb_user
    (username, 
    email, 
    created_at) 
    VALUES (?, ?, NOW());`;

    try {
      const [userRows] = await db.query(userSql, [username, account]);
      output.success = !!userRows.affectedRows;

      if (output.success) {
        
        const sql = "SELECT * FROM mb_user WHERE username=?";
        const [rows] = await db.query(sql, username);

        if(rows.length){

          const profileSql = `INSERT INTO mb_user_profile (user_id, profile_pic_url) 
          VALUES (?, ?)`;

          const [profileSqlResult] = await db.query(profileSql, [rows[0].id, photoUrl]);
          output.success = !!profileSqlResult.affectedRows

          if(output.success){
            const token = jwt.sign(
              { id: rows[0].id, username: rows[0].username },
              process.env.JWT_SECRET
            );
    
            output.data = {
              id: rows[0].id,
              username: rows[0].username,
              token,
            };

            output.profile = {
              profileUrl: photoUrl,
            }
          }
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  } else {
    output.success = true;

    const row = emailRows[0]
    const token = jwt.sign(
      {
        id: row.id,
        account: row.username,
      },
      process.env.JWT_SECRET
    );

    // TODO:
    output.data = {
      id: row.id,
      username: row.username,
      token,
    };

    output.profile = {
      profileUrl: photoUrl,
    }
  }

  res.json(output);
});

// router.post("/edit-profile", upload.array("photos", 5), (req, res)=>{
//     res.json({
//         body: req.body,
//         file: req.files
//     })
// })

export default router;
