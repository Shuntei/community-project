import express from "express";
import db from "../../utils/tony/mysql2-connect.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("<h2>Hi</h2>");
});

// Define a route to fetch data from the address_book table
router.get("/tour-post", async (req, res) => {
  try {
    const query = "SELECT * FROM tr_tour";
    
    const [rows, fields] = await db.query(query);

    res.json(rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;