import express, { response } from "express";
import db from "./../../utils/mysql2-connect.js";

const router = express.Router();

router.get("/address-book",async (req,res)=>{
  try {
    const sql = "SELECT * FROM address_book";
    const [rows,fields] =await db.query(sql);
    

    res.json(rows);
  }catch(e){
    console.log(e)
  }
});

export default router;