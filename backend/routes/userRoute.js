import express from "express"
import { login, registure } from "../controllers/userController.js"



const router = express.Router()

router.route("/registure").post(registure)
router.route("/login").post(login)

export default router;