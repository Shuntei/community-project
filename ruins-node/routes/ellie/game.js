import express, { response } from "express";
import db from "../../utils/ellie/mysql2-connect.js";
import dayjs from "dayjs";
const app = express();
//const server = require('http').Server(app)
const router = express.Router();

router.get("/ruins_final", async (req, res) => {
  try {
    const sql = "SELECT * FROM `gm_user_achieved`";
    const [rows, fields] = await db.query(sql);

    res.json(rows);
  } catch (e) {
    console.log(e);
  }
});

router.post("/ruins_final", async (req, res) => {
  try {
    const { achievedId, newValue } = req.body;

    console.log({ achievedId, newValue });

    const sql =
      "UPDATE `gm_user_achieved` SET `activate`=? WHERE `achieved_id`=?";

    const [result] = await db.query(sql, [newValue, achievedId]);
    console.log(result);

    res
      .status(200)
      .json({ message: "Achievement updated successfully.", ...result });
  } catch (error) {
    console.error("Error updating achievement:", error);
    res.status(500).json({ error: "Failed to update achievement." });
  }
});

router.post("/ruins_final/gm_note", async (req, res) => {
  let output = {
    success: false,
    result: [],
  };
  // res.send('helllo')
  // res.json({title:1, content:2})
  try {
    const { title, memo } = req.body;

    console.log(req.body);

    const addNote =
      "INSERT INTO `gm_note`(`title`, `memo`, `time`) VALUES ( ?, ?, NOW())";

    const [result] = await db.query(addNote, [title, memo]);
    console.log(result);
    if (!!result.affextedRows) {
      return res.json({ success: false });
    }
    res.json({ success: true, result });
  } catch (error) {
    console.error("Error updating note", error);
    res.status(500).json({ error: "Failed to update note." });
  }
});

//取得memo
router.get("/gm_note/:mid", async (req, res)=>{
  let output = {
    success: false,
    rows: [],
  };
  // 取得 note_id 去搜尋
  const note_id = req.params.note_id;

  const sql =
    "SELECT `note_id`, `mid`, `title`,`memo` FROM `gm_note` WHERE `mid` = ? ";

    const [rows] = await db.query(sql, [mid]);
  if (!rows.length) {
    return res.json({ success: false });
  }

  res.json({ success: true, rows });
})
export default router;
