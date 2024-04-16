import express from "express";
import db from "../../utils/kevin/mysql2-connect.js";
import dayjs from "dayjs";

const router = express.Router();
// 拿到會員資料
router.get('/member-info/:mid', async (req, res) => {
  const mid = req.params.mid || ''

  try {
    const sql = `SELECT * FROM mb_user WHERE id = ?`
    const [rows] = await db.query(sql, [mid])
    if (!rows.length) {
      return res.json({ success: false })
    }
    const row = rows[0]
    res.json({ success: true, row })
  } catch (ex) {
    console.log(ex)
  }
})

// 7-11 店到店：與資料庫無關，單純轉向使用
const callback_url = process.env.SHIP_711_STORE_CALLBACK_URL

router.post('/711', function (req, res) {
  console.log(req.body)
  res.redirect(callback_url + '?' + new URLSearchParams(req.body).toString())
  // const queryString = QueryString.stringify(req.body)
  // console.log(queryString)
  // res.redirect(callback_url + '?' + queryString)
})



export default router;
