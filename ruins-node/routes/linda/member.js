import express from "express"
import multer from "multer"

const router = express.Router()

router.get("/test", (req, res) =>{
    res.send("<h2>Hi</h2>")
})

router.post("/signup", (req, res)=>{
    res.json(req.body)
})

// router.post("/edit-profile", upload.array("photos", 5), (req, res)=>{
//     res.json({
//         body: req.body,
//         file: req.files
//     })
// })

export default router