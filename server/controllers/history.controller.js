import { db } from "../utils/db.js";

export async function getAllHistory(req, res) {
    try {
        const messagesCollection = db.collection("messages");
        const result = await messagesCollection.find().toArray()
        if (result) {
            return res.json({
                status: 200,
                data: result
            })
        }
    } catch (error) {

    }
}
export async function getAllGroupHistory(req, res) {
    try {
        const id = req.params.groupId
        const messagesCollection = db.collection("messages");
        const result = await messagesCollection.find({
            groupId: id
        }).toArray()
        if (result) {
            return res.json({
                status: 200,
                data: result
            })
        }
    } catch (error) {

    }
}