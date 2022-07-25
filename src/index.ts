import * as express from "express"

class App {
    public application : express.Application

    constructor() {
        this.application = express()
    }
}

const port = 4000;
const app = new App().application
app.get("/",(req:express.Request, res : express.Response) => {
    res.send("start")
})

app.listen(port, () => console.log(`start port ${port}`))