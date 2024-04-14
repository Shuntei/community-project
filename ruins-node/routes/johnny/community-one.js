import express, { query } from "express";
import cors from "cors";
import db from "../../utils/johnny/mysql2-connect.js";
import uploadImgs from "../../utils/johnny/upload-imgs.js";
import bodyParser from "body-parser";
import multer from "multer";

const router = express.Router();

router.use(cors());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
// 靜態文件,存放目錄
router.use(express.static("routes/johnny/upload"));

//下面是選board後對應posts的邏輯
router.get("/boards/:board_id?", async (req, res) => {
  // 如果提供了板塊ID，則返回指定板塊的信息
  const board_id = +req.params.board_id;
  // 如果沒有提供板塊ID，則返回所有板塊的信息
  if (!board_id) {
    const sql = "SELECT * FROM `sn_public_boards`";
    const [boardsRows] = await db.query(sql);
    res.json(boardsRows);
    return;
  }

  let page = +req.query.page || 1;
  let totalPages = 0;
  let perPage = 2;
  // let where = " WHERE 1 ";

  // console.log(board_id);
  const t_sql =
    " SELECT COUNT(1) totalRows FROM sn_public_boards AS b JOIN sn_posts AS p USING(board_id) WHERE b.board_id =? ";
  const [[{ totalRows }]] = await db.query(t_sql, [board_id]);
  // console.log(totalRows);

  if (totalRows) {
    totalPages = Math.ceil(totalRows / perPage);
    if (page > totalPages) {
      const newQuery = { ...req.query, page: totalPages };
      const qs = new URLSearchParams(newQuery).toString();
      // console.log("qs:", qs);
      return { success: false, redirect: `?${qs}` };
    }
  }

  const selectedBdPosts = `SELECT * FROM sn_public_boards AS b JOIN sn_posts AS p USING(board_id) WHERE b.board_id = ? ORDER BY p.post_id DESC LIMIT ${
    (page - 1) * perPage
  }, ${perPage} `;
  // const selectedBdPosts = `SELECT * FROM sn_public_boards AS b JOIN sn_posts AS p USING(board_id) WHERE b.board_id = ? ORDER BY p.post_id DESC`;

  const [selectedBdPostsRows] = await db.query(selectedBdPosts, [board_id]);
  // console.log(selectedBdPostsRows);
  if (selectedBdPostsRows.length === 0) {
    // return { success: false, error: "Posts not found(Backend Msg)" };
    return res.json({
      success: true,
      page: 1,
      totalPages: 1,
      selectedBdPostsRows: [{ title: "無任何貼文" }],
    });
  }

  res.json({
    success: true,
    selectedBdPostsRows,
    page,
    perPage,
    totalPages,
  });
});

router.get("/posts/:post_id?", async (req, res) => {
  // const post_id = +req.params.post_id;
  let postId = +req.query.postId || 0;
  // console.log("postId_log:", postId);

  if (!postId) {
    // 這裡是主頁所有文章
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
        console.log("qs--", qs);
        return { success: false, redirect: `?` + qs };
      }
    }

    const totalPostsSql = ` SELECT * FROM sn_posts ${where} 
    ORDER BY post_id DESC LIMIT ${(page - 1) * perPage}, ${perPage}`;
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

  // 這裡是選擇單篇文章
  const chosenPostSql = " SELECT * FROM sn_posts WHERE post_id=? ";
  const [chosenPost] = await db.query(chosenPostSql, [postId]);
  // console.log(postId);
  console.log("chosenPost", chosenPost);
  res.json(chosenPost);
});

router.get("/personal/posts/:post_id?", async (req, res) => {
  // const post_id = +req.params.post_id;
  let postId = +req.query.postId || 0;
  // console.log("postId_log:", postId);

  if (!postId) {
    let page = +req.query.page || 1;

    // 這裡是主頁所有文章
    // console.log(page);
    // let keyword = req.query.keyword || "";
    let where = "  WHERE post_type = 'yours' ";

    // if (keyword) {
    //   const keywordEsc = db.escape("%" + keyword + "%");
    //   where += AND
    // }

    if (page < 1) {
      return { success: false, redirect: "?page=1" };
    }

    const perPage = 3;
    const t_sql = `SELECT COUNT(1) totalRows FROM sn_posts ${where}`;
    // console.log(t_sql);
    const [[{ totalRows }]] = await db.query(t_sql);
    // console.log("totalRows:", totalRows);

    let totalPostsRows = [];
    let totalPages = 0;

    if (totalRows) {
      totalPages = Math.ceil(totalRows / perPage);
      if (page > totalPages) {
        const newQuery = { ...req.query, page: totalPages };
        const qs = new URLSearchParams(newQuery).toString();
        console.log("qs--", qs);
        return { success: false, redirect: `?` + qs };
      }
    }

    const totalPostsSql = ` SELECT * FROM sn_posts ${where} 
    ORDER BY post_id DESC LIMIT ${(page - 1) * perPage}, ${perPage}`;
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

  // 這裡是選擇單篇文章
  const chosenPostSql = " SELECT * FROM sn_posts WHERE post_id=? ";
  const [chosenPost] = await db.query(chosenPostSql, [postId]);
  // console.log(postId);
  // console.log("chosenPost", chosenPost);
  res.json(chosenPost);
});

router.post("/psadd", uploadImgs.single("photo"), async (req, res) => {
  // 在這裡處理圖片上傳
  // console.log("Uploaded file:", req.file.path);

  const output = {
    success: false,
    bodyData: { body: req.body },
    errors: {},
  };
  // console.log("the bodyData: ", output.bodyData);

  let result = {};
  // const sql = "INSERT INTO `sn_posts` SET ? ";
  try {
    req.body.post_type = "yours";
    console.log("this is photo:", req.file);

    if (!req.file) {
      const sql =
        "INSERT INTO `sn_posts` (`title`, `content`, `post_type`, `board_id`) VALUES ( ?, ?, ?, ?)";
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
      const sql =
        "INSERT INTO `sn_posts` (`title`, `content`, `post_type`, `image_url`, `board_id`) VALUES ( ?, ?, ?, ?, ?)";
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

// router.post("/try-uploads", uploadImgs.array("photos", 3), (req, res) => {
//   // console.log(req.files);
//   res.json(req.files);
// });
router.post("/try-uploads", uploadImgs.single("photo"), (req, res) => {
  console.log(req.file);
  res.json(req.file);
});

export default router;
