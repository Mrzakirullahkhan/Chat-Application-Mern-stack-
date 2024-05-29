import express from "express"
import {getmessage, sendMessage} from "../controllers/messageController.js" 
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/send/:id").post(isAuthenticated,sendMessage)
router.route("/:id").get(isAuthenticated,getmessage)
export default router