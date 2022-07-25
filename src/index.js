const express = require("express")
const app = express()
const port = 4000

class Test {
    constructor() {
        console.log("test init")
    }

    y = 3
    x = 2

    sum() {
        return this.y+ this.x
    }
    
}

app.get("/",(req, res) => {
    res.send("tttt")
})

app.get("/class", (req, res) => {

    const test = new Test();

    console.log(test.x)
    console.log(test.y)
    console.log(test.sum())

    res.send("class")
})

app.get("/param", (req, res) => {

    const sl_id = req.query.sl_id
    console.log(`sl_id = ${sl_id}`)
    res.send(req.query)
})

app.listen(port, () => {
    console.log(`server listen to port ${port}`)
})