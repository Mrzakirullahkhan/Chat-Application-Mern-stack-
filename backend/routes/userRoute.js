import express from "express"
import { login, logout, registure } from "../controllers/userController.js"



const router = express.Router()

router.route("/registure").post(registure)
router.route("/login").post(login)
router.route("/logout").get(logout)

export default router;