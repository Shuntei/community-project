import express from "express";
import db from "../../utils/tony/mysql2-connect.js";

const router = express.Router();

// 取得揪團文章列表
const getTourList = async (req, res) => {
  let page = +req.query.page || 1; //用戶要求查看第幾頁
  let keyword = req.query.keyword || ""; // 設定關鍵字
  let where = " WHERE 1 "; //後面不確定有幾個搜尋條件

  // 搜尋篩選
  if (keyword.trim() !== "") {
    where += ` AND (tour_post.title LIKE '%${keyword}%')`;
  }
  // 揪團主題篩選
  if (req.query.category) {
    where += ` AND tour_location.cid = ${req.query.category}`;
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
    SELECT tour_post.*, MIN(tour_images.image_url) AS image_url, tour_location.cid
    FROM tony_tour_post AS tour_post
    LEFT JOIN tony_tour_images AS tour_images 
    ON tour_post.tour_id = tour_images.tour_id
    LEFT JOIN tony_tour_location AS tour_location 
    ON tour_post.ruin_id = tour_location.ruin_id
    ${where}
    GROUP BY tour_post.tour_id
    ORDER BY tour_post.event_date
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

// 從資料庫取得圖片資料
router.get("/api", async (req, res) => {
  try {
    const result = await getTourList(req);
    res.json(result);
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// 定義路由名稱, 從資料庫取得表單資料
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