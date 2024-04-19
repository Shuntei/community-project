import express from "express";
import db from "../../utils/kevin/mysql2-connect.js";
import dayjs from "dayjs";

const router = express.Router();

const getListData = async (req, res) => {
  let page = +req.query.page || 1; //用戶要求查看第幾頁
  let where = " WHERE 1 "; //後面不確定有幾個搜尋條件

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

  // 副分類篩選
  let sub_category =
    req.query.sub_category && typeof req.query.sub_category === "string"
      ? req.query.sub_category
      : "";
  let sub_categoryEsc = db.escape(`${sub_category}`);

  // 價格由高到低、低到高、最新上架
  let sortBy =
    req.query.sortBy && typeof req.query.sortBy === "string"
      ? req.query.sortBy.trim()
      : "";

  if (keyword) {
    where += ` AND ( \`name\` LIKE ${keywordEsc})`;
  }
  if (main_category) {
    where += ` AND (category_id = ${categoryEsc})`;
  }

  if (sub_category) {
    where += ` AND (sub_category_id = ${sub_categoryEsc})`;
  }

  if (sortBy) {
    if (sortBy === "priceFromHighToLow") {
      where += ` ORDER BY \`price\` DESC `;
    } else if (sortBy === "priceFromLowToHigh") {
      where += ` ORDER BY \`price\` ASC `;
    } else if (sortBy === "latest") {
      where += ` ORDER BY \`create_at\` ASC `;
    }
  } else {
    where += ` ORDER BY \`create_at\` ASC `;
  }

  if (page < 1) {
    return { success: false, redirect: "?page=1" };
  }
  const perPage = 8; //每頁幾筆
  const t_sql = `SELECT COUNT(1) totalRows FROM ca_products ${where}`;
  const [[{ totalRows }]] = await db.query(t_sql);

  let rows = []; // 預設值
  let totalPages = 0;
  if (totalRows) {
    totalPages = Math.ceil(totalRows / perPage);
    if (page > totalPages) {
      return { success: false, redirect: `?page=${totalPages}` };
    }
    const sql = `SELECT * FROM ca_products 
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
  };
};

// 取得商品所有資料
router.get("/api", async (req, res) => {
  res.json(await getListData(req));
});

// 取得單筆商品資料
router.get("/api/getProduct/:pid", async (req, res) => {
  const pid = +req.params.pid;

  const sql = `SELECT * FROM ca_products WHERE pid=?`;
  const [rows] = await db.query(sql, [pid]);
  if (!rows.length) {
    return res.json({ success: false });
  }
  const row = rows[0];

  res.json({ success: true, row });
});

//取得商品評價
const getComment = async (req) => {
  let pid = +req.params.pid
  let where = ` WHERE 1 AND pid = ?`
  let totalRows = 0
  let rows = []

  let output = {
    success: false,
    rows,
    totalRows,
    redirect: '',
    info: '',
  }

  const t_sql = `SELECT COUNT(1) totalRows FROM ca_product_comment  ${where} `

  ;[[{ totalRows }]] = await db.query(t_sql, [pid])

  if (totalRows > 0) {
    const sql = `SELECT * FROM ca_product_comment ${where}`
    ;[rows] = await db.query(sql, [pid])
    output = { ...output, success: true, rows, totalRows }
  }

  return output
}
router.get('/api/getProductComment/:pid', async (req, res) => {
  res.json(await getComment(req))
})

// 相關商品區：取得 10 筆同類別商品 row.sub_category
router.get('/api/relatedProducts', async (req, res) => {
  const sub_category = +req.query.sub_category || 2
  const pid = +req.query.pid || 1
  const sql =
    'SELECT * FROM `ca_products` WHERE `sub_category_id` = ? AND `pid` != ? LIMIT 10 '

  const [rows] = await db.query(sql, [sub_category, pid])
  if (!rows.length) {
    return res.json({ success: false })
  }

  res.json({ success: true, rows })
})

export default router;
