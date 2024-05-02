import express from 'express';
import db from '../../utils/mysql2-connect.js';
const router = express.Router();
router.use(express.json());

// 確認有連線
router.get('/try-connect', async (req, res) => {
  const sql = `SELECT * FROM mb_user`
  const [rows] = await db.query(sql)
  res.json(rows)
})

// 計算所有點數
router.get('/05-streaming/u-point/:pid', async (req, res) => {
  let pid = req.params.pid

  // 共擁有多少點數
  const t_sql = `SELECT * FROM tyler_get_point WHERE user_id=?`
  let [t_rows] = await db.query(t_sql, [pid])
  let totalGet = t_rows.reduce((acc, row) => acc + row.has_point, 0);

  // 共消耗多少點數
  const u_sql = `SELECT * FROM tyler_use_point WHERE user_id=?`;
  let [u_rows] = await db.query(u_sql, [pid]);
  let totalUse = u_rows.reduce((acc, row) => acc + row.point_use, 0);

  let leftPoints = totalGet - totalUse

  res.json(leftPoints);
})

// 新增點數
router.post('/add-point', async (req, res) => {

  const { id } = req.body
  let points = 1000;
  let source = "頭像獎勵"

  const sql = `INSERT INTO tyler_get_point (user_id, has_point, source, time_has_point) VALUES (?, ?, ?, CURRENT_TIMESTAMP())`
  let [rows] = await db.query(sql, [id, points, source])
  res.json(rows)
})

// 刪除點數
router.post('/use-point', async (req, res) => {

  const { userId, points, source } = req.body

  const sql = `INSERT INTO tyler_use_point (user_id, point_use, gift, time_use_point) VALUES (?, ?, ?, CURRENT_TIMESTAMP())`
  let [rows] = await db.query(sql, [userId, points, source])
  res.json(rows)
})

// 登陸主播號碼
router.post('/stream-logon', async (req, res) => {

  const { streamId, streamerName } = req.body

  let sql = 'INSERT INTO tyler_stream (stream_code, time, streamer_name	) VALUES (?,  CURRENT_TIMESTAMP(),?)'
  let [rows] = await db.query(sql, [streamId, streamerName])
  res.json(rows)
})

// 觀看最新主播
router.get('/watch-stream', async (req, res) => {

  const sql = `SELECT * FROM tyler_stream ORDER BY time DESC LIMIT 1`
  let [rows] = await db.query(sql)
  res.json(rows)
})

// 紀錄主播打賞
router.post('/give-streamer-point', async (req, res) => {

  const { name, gift, point } = req.body

  let sql = 'INSERT INTO tyler_streamer_get_point (streamer_name, gift, get_point, time) VALUES (?, ?, ?, CURRENT_TIMESTAMP())'
  let [rows] = await db.query(sql, [name, gift, point])
  res.json(rows)
})

// 紀錄打賞總量
router.get('/totalBonus/:name', async (req, res) => {
  const name = req.params.name

  const sql = `SELECT * FROM tyler_streamer_get_point WHERE streamer_name=?`
  let [rows] = await db.query(sql, [name])
  let totalPoints = rows.reduce((acc, row) => acc + row.get_point, 0);
  res.json(totalPoints)
})

// 取得打賞對象
router.get('/getStreamerName', async (req, res) => {
  const sql = `SELECT * FROM tyler_stream ORDER BY time DESC LIMIT 1`
  let [rows] = await db.query(sql)
  res.json(rows)
})

export default router