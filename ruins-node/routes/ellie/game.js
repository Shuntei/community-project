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

router.post("/ruins_final/gm_note_edit", async (req, res) => {
  let output = {
    success: false,
    result: [],
  };
  // res.send('helllo')
  // res.json({title:1, content:2})
  try {
    const { title, memo, note_id } = req.body;

    console.log(req.body);

    const addNote =
      // "UPDATE `gm_note`(`title`, `memo`, `time`) VALUES ( ?, ?, NOW()) WHERE `note_id`= ? ";
      `UPDATE gm_note
      SET title = ?, memo = ?, time = NOW()
      WHERE user_id = 1 AND note_id = ? `;

    const [result] = await db.query(addNote, [title, memo, note_id]);
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
// //取得memo
// router.get("/gm_note", async (req, res)=>{
//   let output = {
//     success: false,
//     rows: [],
//   };
//   // 取得 note_id 去搜尋
//   const note_id = req.params.note_id;

//   const sql =
//     "SELECT `note_id`, `user_id`, `title`,`memo` FROM `gm_note` WHERE `user_id` = ? ";

//     const [rows] = await db.query(sql, [mid]);
//   if (!rows.length) {
//     return res.json({ success: false });
//   }

//   res.json({ success: true, rows });
// })

//取得title
router.get("/gm_note", async (req, res) => {
  let output = {
    success: false,
    rows: [],
  };
  // 取得 note_id 去搜尋
  const note_id = req.params.note_id;

  const sql =
    "SELECT `note_id`,`title`,`memo` FROM `gm_note` WHERE `user_id` = 1 ";

  const [rows] = await db.query(sql);
  if (!rows.length) {
    return res.json({ success: false });
  }

  res.json({ success: true, rows });
});

//取得mission
router.get("/gm_mission", async (req, res) => {
  let output = {
    success: false,
    rows: [],
  };
  // 取得 mission_id 去搜尋
  const mission_id = req.params.mission_id;

  const sql =
    "SELECT `mission_id`,`mission_name`,`activate` FROM `gm_mission` WHERE `user_id` = 1 ";

  const [rows] = await db.query(sql);
  if (!rows.length) {
    return res.json({ success: false });
  }

  res.json({ success: true, rows });
});

//check missions or insert
router.get("/check/gm_mission/:user_id", async (req, res) => {
  let output = {
    success: false,
    rows: [],
  };

  // 取得 mission_id 去搜尋
  const user_id = +req.params.user_id || 0;

  // find user's missions
  const t_sql = "SELECT COUNT(1) myCount FROM `gm_mission` WHERE `user_id` = ?";

  const [rows] = await db.query(t_sql, [user_id]);
  let result = {};
  if (user_id && rows[0].myCount < 1) {
    const sql = `INSERT INTO  gm_mission  ( user_id, mission_name) VALUES
    (${user_id}, 'Edit your avatar.'),
    (${user_id}, 'You ve found a LINK.'),
    (${user_id}, 'Teleport yourself.'),
    (${user_id}, 'Have you seen HomePage'),
    (${user_id}, 'important member page'),
    (${user_id}, 'View SNS'),
    (${user_id}, 'Love window shopping'),
    (${user_id}, 'tour tour tour'),
    (${user_id}, 'LIVE WAREHOUSE.'),
    (${user_id}, 'shut up and pay attention'),
    (${user_id}, 'tic-tac-toe 01'),
    (${user_id}, 'tic-tac-toe harder'),
    (${user_id}, 'Done all.');`;
    console.log(sql);
    [result] = await db.query(sql);
  }
  /*
  const sql =
    "SELECT `mission_id`,`mission_name`,`activate` FROM `gm_mission` WHERE `user_id` = 1 ";

  const [rows] = await db.query(sql);
  if (!rows.length) {
    return res.json({ success: false });
  }
*/
  res.json({ success: true, result });
});

//取得 user_achieved
router.get("/gm_user_achieved", async (req, res) => {
  let output = {
    success: false,
    rows: [],
  };
  // 取得 achieved_id 去搜尋
  const achieved_id = req.params.mission_id;

  const sql =
    "SELECT `achieved_id`,`name`,`description`,`activate` FROM `gm_user_achieved` WHERE `user_id` = 1 ";

  const [rows] = await db.query(sql);
  if (!rows.length) {
    return res.json({ success: false });
  }

  res.json({ success: true, rows });
});

//

export default router;
