import {Conversation} from "../models/conversationModel.js"
import { Message } from "../models/messageModel.js";
export const sendMessage = async(req,res)=>{
    try {
        const senderId = req.id;
        const recieverId= req.param.id;
        const {message} = req.body;
        let gotConversation = await Conversation.findOne({
            participants:{$all :[senderId,recieverId]},
        });
        if (!gotConversation) {
            gotConversation = await Conversation.create({
                participants:[senderId, recieverId]
            })
        }
        const newMessage = await Message.create({
            senderId,
            recieverId,
            message,
        })
        if (newMessage) {
            gotConversation.messages.push(newMessage._id)
        };
        await gotConversation.save();
        
        return res.status(201).json({
            message:"message send successfully"
        })
    } catch (error) {
        console.log(error)
    }
}