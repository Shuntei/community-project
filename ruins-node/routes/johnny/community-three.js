import express from "express";
import cors from "cors";
import db from "../../utils/mysql2-connect.js";
import uploadImgs from "../../utils/johnny/upload-imgs.js";
import bodyParser from "body-parser";

// 這個檔案用於好友 通知相關 及獲取會員資料

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
  console.log("userInfo", userInfo);

  res.json(userInfo);
});

router.get("/userinfo", async (req, res) => {
  // const sql = `SELECT * FROM mb_user WHERE 1`;
  const keyword = req.query.followsKeyword;

  console.log("keyword", keyword);

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

router.get("/followedstatus", async (req, res) => {
  let authId = +req.query.authId;
  let psUserId = +req.query.psUserId;
  let status = req.query.status;
  res.json({ authId, psUserId, status });
  console.log(authId, psUserId, status);
  // const follow = `INSERT INTO sn_friends (user_id, friend_id, status)
  // VALUES (user_id_value, friend_id_value, 'followed')`;
  // const [followedStatus] = await db.query(follow, []);
});

export default router;
