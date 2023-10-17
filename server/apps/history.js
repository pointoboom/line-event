import { Router } from "express";
import { getAllHistory, getAllGroupHistory } from "../controllers/history.controller.js";
const historyRouter = Router();

historyRouter.get("/", async (req, res) => {
    getAllHistory(req, res)
})
historyRouter.get("/:groupId", async (req, res) => {
    getAllGroupHistory(req, res)
})
export default historyRouter;