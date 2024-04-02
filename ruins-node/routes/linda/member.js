app.post("/signup", (req, res)=>{
    res.json(req.body)
})

app.post("/edit-profile", upload.array("photos", 5), (req, res)=>{
    res.json({
        body: req.body,
        file: req.files
    })
})