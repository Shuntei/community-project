import express from "express";
import cors from "cors";
import db from "../../utils/johnny/mysql2-connect.js";
import uploadImgs from "../../utils/johnny/upload-imgs.js";
import bodyParser from "body-parser";

// 這個檔案用於好友 通知相關

const router = express.Router();

router.use(cors());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// 靜態文件存放目錄
router.use(express.static("routes/johnny/upload"));

router.get("/userinfoByPostId", async (req, res) => {
  const postId = +req.query.postId;

  const userInfoSql = `
  SELECT mb_user.* 
  FROM sn_posts
  JOIN mb_user ON sn_posts.user_id = mb_user.id
  WHERE sn_posts.post_id=?
`;
  const [userInfo] = await db.query(userInfoSql, [postId]);
  console.log(userInfo);

  res.json(userInfo);
});

router.get("/userinfo", async (req, res) => {
  // const sql = `SELECT * FROM mb_user WHERE 1`;
  const keyword = req.query.followsKeyword;

  console.log(keyword);

  let where = ` WHERE 1 `;
  if (keyword) {
    const keywordEsc = db.escape("%" + keyword + "%");
    where += ` AND username LIKE ${keywordEsc} `;
  }

  const userInfoSql = `
  SELECT mb_user.* FROM mb_user ${where} ORDER BY id DESC `;
  const [userInfo] = await db.query(userInfoSql);
  // console.log(userInfo);

  res.json(userInfo);
});

export default router;
