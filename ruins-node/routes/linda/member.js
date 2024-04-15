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

        if (rows.length) {
          const profileSql = `INSERT INTO mb_user_profile (user_id, profile_pic_url) 
          VALUES (?, ?)`;

          const [profileSqlResult] = await db.query(profileSql, [
            rows[0].id,
            photoUrl,
          ]);
          output.success = !!profileSqlResult.affectedRows;

          if (output.success) {
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
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  } else {
    output.success = true;

    const row = emailRows[0];
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
    };
  }

  res.json(output);
});

router.get("/profile-data/:id", async (req, res) => {
  const output = {
    success: false,
    code: 0,
    error: "",
    data: {
      profileId: 0,
      userId: 0,
      profileUrl: "",
      coverUrl: "",
      aboutMe: "",
      showContactInfo: false,
      ytLink: "",
      fbLink: "",
      igLink: "",
      gmailLink: "",
    },
  };

  const id = req.params.id;

  if (!id) {
    output.error = "There is no id";
    return res.json(output);
  }

  try {
    const sql = `SELECT * FROM mb_user_profile WHERE user_id=?`;
    const [rows] = await db.query(sql, [id]);

    if (!rows.length) {
      output.error = "There is no info with this id";
      return res.json(output);
    }

    const row = rows[0];
    output.success = true;

    output.data = {
      profileId: row.profile_id,
      userId: row.user_id,
      profileUrl: row.profile_pic_url || "",
      coverUrl: row.cover_pic_url || "",
      aboutMe: row.about_me || "",
      showContactInfo: row.allow_contact_info_visibility || false,
      ytLink: row.youtube_link || "",
      fbLink: row.facebook_link || "",
      igLink: row.instagram_link || "",
      gmailLink: row.gmail_link || "",
    };

    res.json(output);
  } catch (ex) {
    console.log(ex);
    output.error = "Fetch data error";
    return res.status(500).json(output);
  }
});

// router.post("/edit-profile", upload.array("photos", 5), (req, res)=>{
//     res.json({
//         body: req.body,
//         file: req.files
//     })
// })

export default router;
