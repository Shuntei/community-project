import express from "express"
import multer from "multer"

const upload = multer({dest: "profile_uploads/"})

const app = express()

// top level middleware 
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use((req, res)=>{
    res.status(404).send(`<h2>404 wrong path</h2>`)
})

const port = process.env.WEB_PORT || 3002
app.listen(port, ()=>{
    console.log(`server started at ${port}`);
})