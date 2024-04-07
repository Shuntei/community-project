import express from "express";
import db from "../../utils/mysql2-connect.js";
import dayjs from "dayjs";

const router = express.Router();

const getListData = async (req, res) => {
  let page = +req.query.page || 1;
  let keyword = req.query.keyword || "";
  let where = " WHERE 1 ";
  if (keyword) {
    const keywordEsc = db.escape("%" + keyword + "%");
    where += ` AND ( \`name\` LIKE ${keywordEsc} )`;
  }

  if (page < 1) {
    return { success: false, redirect: "?page=1" };
  }
  const perPage = 8;
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
    ORDER BY pid DESC 
    LIMIT ${(page - 1) * perPage}, ${perPage}`;
    [rows] = await db.query(sql);
  }
  return { success: true, totalRows, totalPages, page, perPage, rows , query:req.query,};
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
