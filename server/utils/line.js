import axios from "axios"
export async function getGroupData(groupId) {
    try {
        const result = await axios.get(`https://api.line.me/v2/bot/group/${groupId}/summary`, {
            headers: {
                "Authorization": `Bearer TkteZ50nTRmdJOkNSdAiop+P0cAa6KM6u4zwIwmKGygfiWfH8510wev4D1Akgv+sFiLoloe9M+uwhkYMOUOztbFrcMX/1V4bTkdE4aCQ5qLtdkT1WajNU9TQ/DcRq16B/i+5FkxKQP/pegxlzNGuSgdB04t89/1O/w1cDnyilFU=`
            }
        })


        return result.data
    } catch (error) {

    }
}

export async function getMemberProfile(userId) {
    try {
        var result = await fetch(`https://api.line.me/v2/bot/group/${req.body.events[0].source.groupId}/member/${userId}`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer TkteZ50nTRmdJOkNSdAiop+P0cAa6KM6u4zwIwmKGygfiWfH8510wev4D1Akgv+sFiLoloe9M+uwhkYMOUOztbFrcMX/1V4bTkdE4aCQ5qLtdkT1WajNU9TQ/DcRq16B/i+5FkxKQP/pegxlzNGuSgdB04t89/1O/w1cDnyilFU=`
            }
        });
        const data = await result.json()
        return data
    } catch (error) {

    }
}
export async function getLineContent(messageId) {
    console.log(messageId)
    try {
        const result = await axios.get(`https://api-data.line.me/v2/bot/message/${messageId}/content`, {
            headers: {
                "Authorization": `Bearer TkteZ50nTRmdJOkNSdAiop+P0cAa6KM6u4zwIwmKGygfiWfH8510wev4D1Akgv+sFiLoloe9M+uwhkYMOUOztbFrcMX/1V4bTkdE4aCQ5qLtdkT1WajNU9TQ/DcRq16B/i+5FkxKQP/pegxlzNGuSgdB04t89/1O/w1cDnyilFU=`
            }
        })
        console.log(result)
        // var result = await fetch(`https://api-data.line.me/v2/bot/message/${messageId}/content`, {
        //     method: 'GET',
        //     headers: {
        //         "Authorization": `Bearer TkteZ50nTRmdJOkNSdAiop+P0cAa6KM6u4zwIwmKGygfiWfH8510wev4D1Akgv+sFiLoloe9M+uwhkYMOUOztbFrcMX/1V4bTkdE4aCQ5qLtdkT1WajNU9TQ/DcRq16B/i+5FkxKQP/pegxlzNGuSgdB04t89/1O/w1cDnyilFU=`
        //     }
        // })

        // if (result.status === 200) {
        //     return new Promise((resolve, reject) => {
        //         var chunks = [];

        //         result.body.on("data", (chunk) => {
        //             chunks.push(chunk);
        //         })
        //             .on("error", error => {
        //                 reject(error);
        //             })
        //             .on("end", _ => {
        //                 var buffer = Buffer.concat(chunks);

        //                 resolve(buffer);
        //             });
        //     });
        // }
    } catch (e) {
        // console.log(e)
        // logger.error('reply message errors.', e);
    }


}