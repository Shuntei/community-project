import express from "express";
import db from "../../utils/kevin/mysql2-connect.js";
import dayjs from "dayjs";

const router = express.Router();

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
