import express from "express";
import db from "../../utils/kevin/mysql2-connect.js";
import dayjs from "dayjs";

const router = express.Router();

const getListData = async (req, res) => {
  let page = +req.query.page || 1; //用戶要求查看第幾頁
  let where = " WHERE 1 "; //後面不確定有幾個搜尋條件
  let qs = {}; //把querystring的設定傳給template

  // 關鍵字搜尋
  let keyword =
    req.query.keyword && typeof req.query.keyword === "string"
      ? req.query.keyword.trim()
      : ""; //處理送進來的資料
  let keywordEsc = db.escape(`%${keyword}%`); // 跳脫，避免SQL injection

  // 主分類篩選
  let main_category =
    req.query.main_category && typeof req.query.main_category === "string"
      ? req.query.main_category
      : "";
      let categoryEsc = db.escape(`${main_category}`);

  // 分類篩選
  let category =
    req.query.category && typeof req.query.category === "string"
      ? req.query.category
      : "";
  let categoryEsc2 = db.escape(`${category}`);

  // 價格由高到低、低到高、最新上架
  let sortBy =
    req.query.sortBy && typeof req.query.sortBy === "string"
      ? req.query.sortBy.trim()
      : "";

  if (keyword) {
    qs.keyword = keyword; // 如果有qs 就給keyword屬性，設定到keyword
    where += ` AND ( \`name\` LIKE ${keywordEsc})`;
  }
  if (main_category) {
    qs.main_category = main_category;
    where += ` AND (category_id = ${categoryEsc})`;
  }

  if (sortBy) {
    qs.sortBy = sortBy;
    if (sortBy === "priceFromHighToLow") {
      where += ` ORDER BY \`price\` DESC `;
    } else if (sortBy === "priceFromLowToHigh") {
      where += ` ORDER BY \`price\` ASC `;
    } else if (sortBy === "latest") {
      where += ` ORDER BY \`create_at\` ASC `;
    }
  }else{
    where += ` ORDER BY \`pid\` DESC `;
  }

  if (page < 1) {
    return { success: false, redirect: "?page=1" };
  }
  const perPage = 8; //每頁幾筆
  const t_sql = `SELECT COUNT(1) totalRows FROM products ${where}`;
  const [[{ totalRows }]] = await db.query(t_sql);

  let rows = []; // 預設值
  let totalPages = 0;
  if (totalRows) {
    totalPages = Math.ceil(totalRows / perPage);
    if (page > totalPages) {
      return { success: false, redirect: `?page=${totalPages}` };
    }
    const sql = `SELECT * FROM products 
    ${where}
    LIMIT ${(page - 1) * perPage}, ${perPage}`;
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
    qs:qs,
  };
};

// 取得商品所有資料
router.get("/api", async (req, res) => {
  res.json(await getListData(req));
});

// 取得單筆商品資料
router.get("/api/getProduct/:pid", async (req, res) => {
  const pid = +req.params.pid;

  const sql = `SELECT * FROM products WHERE pid=?`;
  const [rows] = await db.query(sql, [pid]);
  if (!rows.length) {
    return res.json({ success: false });
  }
  const row = rows[0];

  res.json({ success: true, row });
});

export default router;
