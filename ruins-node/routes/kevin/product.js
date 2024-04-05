import express from "express";
import db from "../../utils/mysql2-connect.js"



const router = express.Router();

// 取得商品所有資料
router.get("/api", async (req, res) => {
  let page = +req.query.page || 1;
  const perPage = 12;
  const t_sql = "SELECT COUNT(1) totalRows FROM products";
  const [[{ totalRows }]] = await db.query(t_sql);

  let rows = []; // 預設值
  let totalPages = 0;
  if(totalRows) {
    totalPages = Math.ceil(totalRows/perPage);
    const sql = `SELECT * FROM products 
    ORDER BY pid DESC 
    LIMIT ${(page-1)*perPage}, ${perPage}`;
    [rows] = await db.query(sql);
  }
  res.json( {totalRows, totalPages, page, perPage, rows} );

})

// 取得單筆商品資料
router.get('/api/getProduct/:pid', async (req, res) => {
  const pid = +req.params.pid

  const sql = `SELECT * FROM products WHERE pid=?`
  const [rows] = await db.query(sql, [pid])
  if (!rows.length) {
    return res.json({ success: false })
  }
  const row = rows[0]

  res.json({ success: true, row })
})

export default router;