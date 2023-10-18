import { db } from "../utils/db.js";

export async function getAllHistory(req, res) {
    try {
        const textSeach = req.body.textSearch;
        const messagesCollection = db.collection("messages");
        const result = await messagesCollection.find({
            message: new RegExp(textSeach)
        }).toArray()
        if (result) {
            return res.json({
                status: 200,
                data: result
            })
        }
    } catch (error) {
        console.log(`Can not get all history that contain "${textSeach}"`)
    }
}
export async function getAllGroupHistory(req, res) {
    try {
        const id = req.params.groupId;
        const textSeach = req.body.textSearch;
        const messagesCollection = db.collection("messages");
        const result = await messagesCollection.find({
            groupId: id,
            message: new RegExp(textSeach)
        }).toArray()
        if (result) {
            return res.json({
                status: 200,
                data: result
            })
        }
    } catch (error) {
        console.log(`Can not get history that contain "${textSeach}" from group ${req.params.groupId}`)
    }
}