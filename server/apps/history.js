import { Router } from "express";
import { getAllHistory, getAllGroupHistory } from "../controllers/history.controller.js";
const historyRouter = Router();

//get http://localhost:4000/history/  - body { "textSearch": "some word"}
historyRouter.get("/", async (req, res) => {
    getAllHistory(req, res)
})

//get http://localhost:4000/history/{groupId}  - body { "textSearch": "some word"}
historyRouter.get("/:groupId", async (req, res) => {
    getAllGroupHistory(req, res)
})
export default historyRouter;