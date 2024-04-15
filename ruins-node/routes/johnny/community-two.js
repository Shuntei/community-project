import express, { query } from "express";
import cors from "cors";
import db from "../../utils/johnny/mysql2-connect.js";
import uploadImgs from "../../utils/johnny/upload-imgs.js";
import bodyParser from "body-parser";

// 這個檔案用於做comment,編輯貼文

const router = express.Router();

router.use(cors());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
// 靜態文件,存放目錄
router.use(express.static("routes/johnny/upload"));

router.put("/edit/:postId?", uploadImgs.single("photo"), async (req, res) => {
  const output = {
    success: false,
    bodyData: { body: req.body, file: req.file },
    errors: {},
  };
  // console.log("the bodyData: ", output.bodyData);

  let postId = +req.params.postId || 0;
  console.log(postId);

  let result = {};
  // const sql = "INSERT INTO `sn_posts` SET ? ";
  try {
    req.body.post_type = "yours";
    console.log("this is photo:", req.file);

    if (!req.file) {
      const sql = `UPDATE sn_posts SET title=? , content=?, post_type=?, board_id=? WHERE post_id=${postId}`;
      [result] = await db.query(sql, [
        req.body.title,
        req.body.content,
        req.body.post_type,
        req.body.boardId,
      ]);
    }
    if (req.file) {
      // console.log("來到圖片區但是沒有圖片");
      const newFilePath =
        "http://localhost:3001/community/" + req.file.path.slice(21);
      console.log("newFilePath", newFilePath);
      // http://localhost:3005/johnny/3a5a7ce6-ca08-4484-9de8-6c22d7448540.jpg 圖片顯示位置
      req.body.image_url = newFilePath; // 圖片的路徑保存在 newFilePath 中
      const sql = `UPDATE sn_posts SET title=?, content=?, post_type=?, image_url=?, board_id=? WHERE post_id=${postId}`;
      [result] = await db.query(sql, [
        req.body.title,
        req.body.content,
        req.body.post_type,
        req.body.image_url,
        req.body.boardId,
      ]);
    }

    // console.log("reqBody:", req.body);
    output.success = !!result.affectedRows;
  } catch (err) {
    console.log(err);
  }
  console.log(output);
  res.json(output);
});

router.get("/toggle-like/:postId?", async (req, res) => {
  // http://localhost:3001/community/toggle-like
  let postId = +req.params.postId;
  const output = {
    success: false,
    action: "",
    error: "",
    code: 0,
    rows: "",
  };
  // jwt部分先掠過

  // 確認有無這則貼文的like
  if (!postId) {
    return;
  } else {
    console.log(`postId: ${postId} came, keep going`);
  }
  const sql1 = `SELECT pl.like_id, ps.post_id FROM sn_post_likes pl 
  INNER JOIN sn_posts ps ON pl.post_id = ps.post_id WHERE ps.post_id=?`;
  const [likeRows, field] = await db.query(sql1, [postId]);
  console.log("start:", likeRows);
  console.log("field:", field);

  if (likeRows.length) {
    const sql2 = `DELETE FROM sn_post_likes WHERE post_id=${postId}`;
    const [result] = await db.query(sql2);

    if (result.affectedRows) {
      output.success = true;
      output.action = "remove";
      output.rows = likeRows;
    } else {
      // 萬一沒有刪除
      output.code = 410;
      output.error = "無法移除";
      return res.json(output);
    }
  }
  if (!likeRows.length) {
    const sql3 = `INSERT INTO sn_post_likes (post_id) VALUES (${postId})`;
    const [result] = await db.query(sql3);
    if (result.affectedRows) {
      output.success = true;
      output.action = "add";
      output.rows = likeRows;
    } else {
      // 萬一沒有新增成功
      output.code = 420;
      output.error = "無法按讚";
      return res.json(output);
    }
  }
  console.log("end:", likeRows);

  console.log(output);
  res.json(output);
});
router.get("/like-state/:postId?", async (req, res) => {
  // http://localhost:3001/community/toggle-like
  let postId = +req.params.postId;
  const output = {
    success: false,
    action: "",
    error: "",
    code: 0,
    rows: "",
  };
  // jwt部分先掠過

  // 確認有無這則貼文的like
  if (!postId) {
    return;
  } else {
    console.log(`postId: ${postId} came, keep going`);
  }
  const sql1 = `SELECT pl.like_id, ps.post_id FROM sn_post_likes pl 
  INNER JOIN sn_posts ps ON pl.post_id = ps.post_id WHERE ps.post_id=?`;
  const [likeRows, field] = await db.query(sql1, [postId]);
  // console.log("start:", likeRows);
  // console.log("field:", field);

  output.rows = likeRows;

  // console.log(output);
  res.json(output);
});
export default router;
