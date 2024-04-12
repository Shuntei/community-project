import express, { query } from "express";
import cors from "cors";
import db from "../../utils/johnny/mysql2-connect.js";
import uploadImgs from "../../utils/johnny/upload-imgs.js";
import bodyParser from "body-parser";
import multer from "multer";

// 這個檔案用於做comment

const router = express.Router();

router.use(cors());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
// 靜態文件,存放目錄
router.use(express.static("routes/johnny/upload"));

router.get("/comment/:comment_id?", async (req, res) => {
  // const post_id = +req.params.post_id;
  let commentId = +req.query.commentId || 0;
  // console.log("postId_log:", postId);

  if (!postId) {
    let page = +req.query.page || 1;
    // console.log(page);
    // let keyword = req.query.keyword || "";
    let where = " WHERE 1 ";

    // if (keyword) {
    //   const keywordEsc = db.escape("%" + keyword + "%");
    //   where += AND
    // }

    if (page < 1) {
      return { success: false, redirect: "?page=1" };
    }

    const perPage = 10;
    const t_sql = `SELECT COUNT(1) totalRows FROM sn_posts ${where}`;
    // console.log(t_sql);
    const [[{ totalRows }]] = await db.query(t_sql);
    // console.log(totalRows);

    let totalPostsRows = [];
    let totalPages = 0;

    if (totalRows) {
      totalPages = Math.ceil(totalRows / perPage);
      if (page > totalPages) {
        const newQuery = { ...req.query, page: totalPages };
        const qs = new URLSearchParams(newQuery).toString();
        return { success: false, redirect: `?` + qs };
      }
    }

    const totalPostsSql = ` SELECT * FROM sn_posts ${where} ORDER BY post_id DESC LIMIT ${
      (page - 1) * perPage
    }, ${perPage}`;
    [totalPostsRows] = await db.query(totalPostsSql);

    // console.log(req.query);

    res.json({
      success: true,
      totalPages,
      totalRows,
      page,
      perPage,
      totalPostsRows,
      query: req.query,
      images: req.files,
    });

    return;
  }

  const chosenPostSql = " SELECT * FROM sn_posts WHERE post_id=? ";
  const [chosenPost] = await db.query(chosenPostSql, [postId]);
  // console.log(postId);
  res.json(chosenPost);
});

router.post("/psadd", uploadImgs.single("photo"), async (req, res) => {
  // 在這裡處理圖片上傳
  console.log("Uploaded file:", req.file.path);
  const newFilePath = "http://localhost:3005/johnny/" + req.file.path.slice(21);
  console.log("newFilePath", newFilePath);
  // http://localhost:3005/johnny/3a5a7ce6-ca08-4484-9de8-6c22d7448540.jpg 圖片顯示位置
  const output = {
    success: false,
    bodyData: { body: req.body, file: req.file },
    errors: {},
  };
  // console.log("the bodyData: ", output.bodyData);

  let result = {};
  // const sql = "INSERT INTO `sn_posts` SET ? ";
  const sql =
    "INSERT INTO `sn_posts` (`title`, `content`, `post_type`, `image_url`) VALUES ( ?, ?, ?, ?)";
  try {
    req.body.post_type = "yours";

    // 如果有上傳的圖片，也將圖片 URL 加入文章內容中
    if (req.file) {
      req.body.image_url = newFilePath; // 圖片的路徑保存在 newFilePath 中
    }

    [result] = await db.query(sql, [
      req.body.title,
      req.body.content,
      req.body.post_type,
      req.body.image_url,
    ]);
    // console.log("reqBody:", req.body);
    output.success = !!result.affectedRows;
  } catch (err) {
    console.log(err);
  }
  console.log(output);
  res.json(output);
});

router.delete("/:post_id", async (req, res) => {
  let post_id = +req.params.post_id || 0;
  // console.log(post_id);
  let output = {
    success: false,
    bodyData: req.body || "no body data",
    errors: {},
    post_id,
  };

  let result = {};
  try {
    if (post_id >= 1) {
      const sql = "DELETE FROM `sn_posts` WHERE post_id=?";
      [result] = await db.query(sql, [post_id]);
      output.success = !!result.affectedRows;
    }
  } catch (err) {
    console.log(err);
  }
  res.json(output);
});

export default router;
