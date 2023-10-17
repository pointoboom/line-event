import { db } from "../utils/db.js";
import { getLineContent, getGroupData } from "../utils/line.js";
export async function createJoinEvent(req, res) {
    console.log(req.body.events[0])
    try {
        const eventsCollection = db.collection("events");
        const groupsCollection = db.collection("groups");
        const event = {
            eventId: req.body.events[0].webhookEventId,
            type: req.body.events[0].type,
            groupId: req.body.events[0].source.groupId,
            timestamp: req.body.events[0].timestamp
        }
        await eventsCollection.insertOne(event)
        const result = await groupsCollection
            .find({
                groupId: req.body.events[0].source.groupId
            })
            .toArray()
        if (result.length === 0) {
            const groupData = await getGroupData(req.body.events[0].source.groupId)
            const group = {
                groupId: req.body.events[0].source.groupId,
                groupName: groupData.groupName,
                groupProfile: groupData.pictureUrl
            }
            await groupsCollection.insertOne(group)
        }

        return res.json({
            status: 200
        })
    } catch (error) {
        return res.json({
            status: 400,
            message: error
        })
    }

}

export async function createLeaveEvent(req, res) {
    console.log(req.body.events[0])
    try {
        const collection = db.collection("events");
        const event = {
            eventId: req.body.events[0].webhookEventId,
            type: req.body.events[0].type,
            groupId: req.body.events[0].source.groupId,
            timestamp: req.body.events[0].timestamp
        }
        await collection.insertOne(event)
        return res.json({
            status: 200
        })
    } catch (error) {
        return res.json({
            status: 400,
            message: error
        })
    }

}

export async function insertMessageEvent(req, res) {
    try {
        console.log(req.body.events[0])
        const eventsCollection = db.collection("events");
        const messagesCollection = db.collection("messages");
        await getLineContent(req.body.events[0].message.id)
        const event = {
            eventId: req.body.events[0].webhookEventId,
            type: req.body.events[0].type,
            groupId: req.body.events[0].source.groupId,
            timestamp: req.body.events[0].timestamp
        }
        await eventsCollection.insertOne(event)
        const message = {
            messageId: req.body.events[0].message.id,
            type: req.body.events[0].message.type,
            message: req.body.events[0].message.text,
            qouteToken: req.body.events[0].message.qouteToken,
            groupId: req.body.events[0].source.groupId,
            userId: req.body.events[0].source.userId,
            timestamp: req.body.events[0].timestamp
        }
        await messagesCollection.insertOne(message)
        return res.json({
            status: 200
        })
    } catch (error) {
        return res.json({
            status: 400,
            message: error
        })
    }


}