import express from 'express'
import db from '../../utils/tyler/mysql2_connect.js';
import cors from "cors";
const corsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    callback(null, true);
  },
};

const router = express.Router();
router.use(express.json());
router.use(cors(corsOptions));

// 確認有連線
router.get('/try-connect', async (req, res) => {
  const sql = `SELECT * FROM mb_user`
  const [rows] = await db.query(sql)
  res.json(rows)
})

// 抓用戶資料
router.get('/05-streaming/u-info/:pid', async (req, res) => {
  let pid = req.params.pid
  const sql = `SELECT * FROM mb_user WHERE id=?`
  let [rows] = await db.query(sql, [pid])
  res.json(rows)
})

// 抓用戶圖片
router.get('/user-pic/:pid', async (req, res) => {
  let pid = req.params.pid
  const sql = `SELECT * FROM mb_user WHERE id=?`
  let [rows] = await db.query(sql, [pid])
  res.json(rows)
})

// 計算所有點數
// router.get('/05-streaming/u-point/:pid', async (req, res) => {
//   let pid = req.params.pid

//   // 共擁有多少點數
//   const t_sql = `SELECT * FROM tyler_get_point WHERE user_id=?`
//   let [t_rows] = await db.query(t_sql, [pid])
//   let totalGet = t_rows.reduce((acc, row) => acc + row.has_point, 0);

//   // 共消耗多少點數
//   const u_sql = `SELECT * FROM tyler_use_point WHERE user_id=?`
//   let [u_rows] = await db.query(u_sql, [pid])
//   let totalUse = u_rows.reduce((acc, row) => acc + row.point_use, 0);

//   let leftPoints = totalGet - totalUse

//   res.json(leftPoints);
// })

// 新增點數
router.post('/add-point', async (req, res) => {

  const { userId } = req.body
  let points = 100;
  let source = "頭像獎勵"

  const sql = `INSERT INTO tyler_get_point (user_id, has_point, source, time_has_point) VALUES (?, ?, ?, CURRENT_TIMESTAMP())`
  let [rows] = await db.query(sql, [userId, points, source])
  res.json(rows)
})

// 刪除點數
router.post('/use-point', async (req, res) => {

  const { userId, points, source } = req.body
  console.log(req.body);

  const sql = `INSERT INTO tyler_use_point (user_id, point_use, effect_id, time_use_point) VALUES (?, ?, ?, CURRENT_TIMESTAMP())`
  let [rows] = await db.query(sql, [userId, points, source])
  res.json(rows)
})

export default router