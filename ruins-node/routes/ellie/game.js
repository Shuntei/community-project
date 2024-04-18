import express, { response } from "express";
import db from "../../utils/ellie/mysql2-connect.js";
import dayjs from "dayjs";
const app = express()
//const server = require('http').Server(app)
const router = express.Router();

router.get("/ruins_final",async (req,res)=>{
  try {
    const sql = "SELECT * FROM `gm_user_achieved`";
    const [rows,fields] =await db.query(sql);
    

    res.json(rows);
  }catch(e){
    console.log(e)
  }
});

router.post("/ruins_final", async (req, res) => {
  try {
    const { achievedId, newValue } = req.body;

    console.log({ achievedId, newValue });

    const sql = "UPDATE `gm_user_achieved` SET `activate`=? WHERE `achieved_id`=?";

    const [result] = await db.query(sql, [newValue, achievedId]);
 
    res.status(200).json({ message: "Achievement updated successfully." , ...result});
  } catch (error) {
    console.error("Error updating achievement:", error);
    res.status(500).json({ error: "Failed to update achievement." });
  }
});


export default router;