import express from "express";
import multer from "multer";
import db from "./../../utils/linda/mysql2-connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import upload from "./../../utils/linda/upload-imgs.js";

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
      profileUrl: "",
      coverUrl: "",
      googlePhoto: false,
      aboutMe: "",
      showContactInfo: false,
      ytLink: "",
      fbLink: "",
      igLink: "",
      gmailLink: "",
      googleLogin: false,
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
      profileUrl: row.profile_pic_url,
      coverUrl: row.cover_pic_url,
      googlePhoto: row.google_photo,
      aboutMe: row.about_me,
      showContactInfo: row.allow_contact_info_visibility,
      ytLink: row.youtube_link,
      fbLink: row.facebook_link,
      igLink: row.instagram_link,
      gmailLink: row.gmail_link,
      googleLogin: row.google_login,
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
    message: "",
    body: req.body,
    data: null,
  };

  const { account, username, photoUrl } = req.body;

  function generateOutputData(rows) {
    const token = jwt.sign(
      { id: rows[0].id, username: rows[0].username },
      process.env.JWT_SECRET
    );
  
    return {
      id: rows[0].id,
      username: rows[0].username,
      profileUrl: rows[0].profile_pic_url,
      coverUrl: rows[0].cover_pic_url,
      googlePhoto: rows[0].google_login,
      aboutMe: rows[0].about_me,
      showContactInfo: rows[0].allow_contact_info_visibility,
      ytLink: rows[0].youtube_link,
      fbLink: rows[0].facebook_link,
      igLink: rows[0].instagram_link,
      gmailLink: rows[0].gmail_link,
      googleLogin: rows[0].google_login,
      token,
    };
  }

  try {
    const emailSql = `SELECT * FROM mb_user WHERE email LIKE ?`;
    const [emailRows] = await db.query(emailSql, [`%${account}%`]);

    if (!emailRows.length) {
      const userSql = `INSERT INTO mb_user
      (username, 
      email, 
      google_photo,
      created_at, 
      google_login, 
      profile_pic_url) 
      VALUES (?, ?, ?, NOW(), ?, ?);`;

      try {
        const [userRows] = await db.query(userSql, [
          username,
          account,
          true,
          true,
          photoUrl,
        ]);
        output.success = !!userRows.affectedRows;

        if (output.success) {
          const sql = "SELECT * FROM mb_user WHERE username=?";
          const [rows] = await db.query(sql, username);

          if (rows.length) {
            output.data = generateOutputData(rows)
            output.success = true;
            output.message = "New info was inserted";
          }
        } else {
          output.success = false;
          output.code = 1;
          output.message = "While selecting from mb_user, something went wrong";
          return res.json(output);
        }
      } catch (ex) {
        console.log(ex);
      }
    } else {
      if (!emailRows[0].google_login) {
        try {
          const sql = `UPDATE mb_user SET google_login=? WHERE id=?`;
          const [result] = await db.query(sql, [true, emailRows[0].id]);
          if (result.affectedRows) {
            output.success = true;
            output.data = generateOutputData(emailRows)
          } else {
            output.success = false;
            output.code = 2;
            output.message =
              "Something went wrong while updating the google_login";
            return res.json(output);
          }
        } catch (ex) {
          console.log("Something went wrong while updating google_login", ex);
        }
      } else if (emailRows[0].google_login) {
        output.data = generateOutputData(emailRows)
        output.success = true;
        output.message = "Successfully logged in";
      }
    }
  } catch (ex) {
    console.log("Something went wrong", ex);
  }

  res.json(output);
});

router.put(
  "/edit-profile/:id",
  upload.fields([
    { name: "cover", maxCount: 1 },
    { name: "avatar", maxCount: 1 },
  ]),
  async (req, res) => {
    const output = {
      success: false,
      code: 0,
      error: "",
      message: "",
    };
    const { name, username, aboutMe, allowShowContact, yt, fb, ig, email } =
      req.body;
    let allowContact = allowShowContact ? true : false;
    const { avatar, cover } = req.files;
    const hasAvatar = avatar && avatar[0].filename;
    const hasCover = cover && cover[0].filename;
    const googlePhoto = hasAvatar ? true : false;
    let id = req.params.id;

    try {
      const usernameSql = `SELECT * FROM mb_user WHERE username LIKE ? and id != ? `;
      const [usernameRows] = await db.query(usernameSql, [`%${username}%`, id]);

      if (usernameRows.length) {
        output.success = false;
        output.code = 1;
        output.error = "Username is in use";
        return res.json(output);
      } else {
        try {
          const sql = `SELECT * FROM mb_user WHERE id = ? `;
          const [rows] = await db.query(sql, id)
          const userSql = `UPDATE mb_user 
          SET 
          name=?, 
          username=?,
          profile_pic_url=?,
          cover_pic_url=?,
          google_photo=?,
          about_me=?,
          allow_contact_info_visibility=?,
          youtube_link=?,
          facebook_link=?,
          instagram_link=?,
          gmail_link=? 
          WHERE id=?`;
          const [result] = await db.query(userSql, [
            name,
            username,
            hasAvatar ? avatar[0].filename : rows[0].profile_pic_url ,
            hasCover ? cover[0].filename : rows[0].cover_pic_url ,
            googlePhoto,
            aboutMe,
            allowContact,
            yt,
            fb,
            ig,
            email,
            id,
          ]);
          if (result.affectedRows) {
            output.success = true;
            output.message = "Updated successfully";
          } else {
            output.success = false;
            output.code = 1;
            output.message = "Update unsuccessful";
          }
        } catch (ex) {
          console.log("Something happened while trying to update all info", ex);
          output.success = false;
          output.error = 2;
        }
      }

      return res.json(output);
    } catch (ex) {
      console.log(ex);
    }
  }
);

export default router;
