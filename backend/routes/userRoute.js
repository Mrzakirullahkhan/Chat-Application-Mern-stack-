import express from "express"
import { registure } from "../controllers/userController.js"



const router = express.Router()

router.route("/registure").post(registure)

export default router;