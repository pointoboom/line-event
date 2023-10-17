import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import historyRouter from "./apps/history.js";
import fileRouter from "./apps/file.js";
import { createJoinEvent, createLeaveEvent, insertMessageEvent } from "./controllers/line.controller.js";
async function init() {
    // dotenv.config();  
    const app = express();
    const port = 4000;

    app.use(cors());
    app.use(bodyParser.json());
    app.use("/history", historyRouter);
    app.use("/file", fileRouter);
    app.get("/", (req, res) => {
        res.send("Hello World!");
    });
    app.post("/webhook", async (req, res) => {
        try {
            switch (req.body.events[0].type) {
                case "join":
                    createJoinEvent(req, res)
                    break;
                case "leave":
                    createLeaveEvent(req, res)
                    break;
                case "message":
                    insertMessageEvent(req, res)
                    break;
                default:
                    break;
            }

        } catch (error) {

        }
    })
    app.get("*", (req, res) => {
        res.status(404).send("Not found");
    });
    app.listen(port, () => {
        console.log(`Server is listening on ${port}`);
    });
}
init();