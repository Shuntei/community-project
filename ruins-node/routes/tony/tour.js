import express from "express";
import db from "../../utils/tony/mysql2-connect.js";

const router = express.Router();

// 取得揪團文章列表
const getTourList = async (req, res) => {
  let page = +req.query.page || 1; //用戶要求查看第幾頁
  let keyword = req.query.keyword || ""; // 設定關鍵字
  let level = req.query.level || 0;  // 難易度
  let ePeriod = req.query.ePeriod || 0; // 活動時長
  let area = req.query.area || 0; // 地區北中南東
  let latest = req.query.latest || "" // 最新揪團
  let soon = req.query.soon || "" // 
  let where = " WHERE 1 "; // 後面不確定有幾個搜尋條件
  let order = "";

  // 搜尋篩選
  if (keyword.trim() !== "") {
    where += ` AND (tour_post.title LIKE '%${keyword}%')`;
  }
  // 揪團主題篩選
  if (req.query.category) {
    where += ` AND tour_location.cid = ${req.query.category}`;
  }

  // 難易度篩選
  if (req.query.level) {
    where += ` AND tour_post.level_id = ${level}`;
  }
  // 活動時長篩選
  if (req.query.ePeriod) {
    if (ePeriod === '一日') {
      where += ` AND tour_post.event_period > 6`; // Greater than 6
    } else if (ePeriod === '半日') {
      where += ` AND tour_post.event_period <= 6`; // Less than or equal to 6
    }
  }
  // 地區篩選
  if (req.query.area) {
    where += ` AND tour_location.area = ${area}`;
  }

  // 最新上架,即創建最晚
  if(latest){
    order += ` ORDER BY tour_post.created_at DESC`
  }
  // 最受歡迎
  // 最快出發,即日期最早
  if(soon){
    order += ` ORDER BY tour_post.event_date`
  }

  if (page < 1) {
    return { success: false, redirect: "?page=1" };
  }
  const perPage = 20; //每頁幾筆

  const t_sql = `SELECT COUNT(DISTINCT tour_post.tour_id) AS totalRows
  FROM tony_tour_post AS tour_post
  LEFT JOIN tony_tour_location AS tour_location 
  ON tour_post.ruin_id = tour_location.ruin_id
  ${where};`;
  const [[{ totalRows }]] = await db.query(t_sql);

  let rows = []; // 預設值
  let totalPages = 0;
  if (totalRows) {
    totalPages = Math.ceil(totalRows / perPage);
    if (page > totalPages) {
      return { success: false, redirect: `?page=${totalPages}` };
    }
    const sql = `
    SELECT tour_post.*, MIN(tour_images.image_url) AS image_url, tour_location.*
    FROM tony_tour_post AS tour_post
    LEFT JOIN tony_tour_images AS tour_images 
    ON tour_post.tour_id = tour_images.tour_id
    LEFT JOIN tony_tour_location AS tour_location 
    ON tour_post.ruin_id = tour_location.ruin_id
    ${where}
    GROUP BY tour_post.tour_id
    ${order}
      LIMIT ${(page - 1) * perPage}, ${perPage};
    `;
    [rows] = await db.query(sql);
  }
  return {
    success: true,
    totalRows,
    totalPages,
    page,
    perPage,
    rows,
    query: req.query,
  };
};

// 取得單筆文章內容
const getTourPost = async (req, res) => {
  try {
    const tid = +req.params.tid;

    const sql = `SELECT tour_post.*, tour_images.*, tour_location.*
      FROM tony_tour_post AS tour_post
      LEFT JOIN tony_tour_images AS tour_images 
      ON tour_post.tour_id = tour_images.tour_id
      LEFT JOIN tony_tour_location AS tour_location 
      ON tour_post.ruin_id = tour_location.ruin_id 
      WHERE tour_post.tour_id=?`;

    const [rows] = await db.query(sql, [tid]);
    if (!rows.length) {
      return { success: false };
    }
    const row = rows;

    return { success: true, row };
  } catch (error) {
    return { success: false, message: "Internal server error" };
  }
};

// 揪團圖片資料
const getTourImages = async (req, res) => {
  const t_sql = `SELECT COUNT(1) totalRows FROM tony_tour_images`;
  const [[{ totalRows }]] = await db.query(t_sql);

  let rows = [];
  if (totalRows) {
    const sql = `SELECT * FROM tony_tour_images`;
    [rows] = await db.query(sql);
  }
  return {
    success: true,
    totalRows,
    rows,
  };
};

// 從資料庫取得表單資料
router.get("/api", async (req, res) => {
  try {
    const result = await getTourList(req);
    res.json(result);
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// 取得單筆資料
router.get("/api/getPost/:tid", async (req, res) => {
  const result = await getTourPost(req);
  res.json(result);
});

router.get("/api/get-post/:id", async (req, res) => {
  const output = {
    success: false,
    code: 0,
    message: '',
    data: null,
  }

  const id = req.params.id
  const sql = `SELECT * FROM tony_tour_post WHERE user_id = ?`;
  const [rows] = await db.query(sql, id)

  if(!rows.length) {
    output.code = 1
    output.message = "There is no tour info"
    return res.json(output)
  }

  output.data = rows
  output.success = true

  res.json(output);
});

// 定義路由名稱, 取得圖片資料
router.get("/img", async (req, res) => {
  res.json(await getTourImages(req));
});

// 只是測試路徑頁面
router.get("/test", (req, res) => {
  res.send("<h2>Hi</h2>");
});

export default router;

// 搜尋 台北 的syql語法
// SELECT tour_post.*, MIN(tour_images.image_url) AS image_url
//     FROM tony_tour_post AS tour_post
//     LEFT JOIN tony_tour_images AS tour_images
//     ON tour_post.tour_id = tour_images.tour_id
//     WHERE 1
//     AND (tour_post.title LIKE '%台北%')
//     GROUP BY tour_post.tour_id
//     ORDER BY tour_post.event_date

// 合併 tour_post 和 tour_location.cid, 並且重複的 ruin_id 會顯示
//   SELECT tour_post.*, tour_location.cid
// FROM tony_tour_post AS tour_post
// LEFT JOIN (
//     SELECT ruin_id, cid
//     FROM tony_tour_location
// ) AS tour_location
// ON tour_post.ruin_id = tour_location.ruin_id
// ORDER BY tour_post.event_date ASC;
