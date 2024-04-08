import express from "express";
import multer from "multer";
import db from "./../../utils/linda/mysql2-connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("<h2>Hi</h2>");
});

// router.get("/try-db", async (req, res) => {
//     const sql = "SELECT * from mb_user LIMIT 3";
//     const [rows] = await db.query(sql);
//     res.json(rows);
//   });

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
          token
        };
      }
    } catch (ex) {
      console.log(ex);
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
