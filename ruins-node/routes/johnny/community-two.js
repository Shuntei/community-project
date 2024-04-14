import express, { query } from "express";
import cors from "cors";
import db from "../../utils/johnny/mysql2-connect.js";
import uploadImgs from "../../utils/johnny/upload-imgs.js";
import bodyParser from "body-parser";
import multer from "multer";

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
        "http://localhost:3005/community/" + req.file.path.slice(21);
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

router.get("/testman", (req, res) => {
  res.send("test community two");
});

export default router;
