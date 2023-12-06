import { Router } from "express";
import userModel from "../models/user.model.js"
import { isValidPassword } from "../utils.js"

const router = Router()

router.get("/login", async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) return res.status(400).send({ status: "Error", error: "Incomplete Values" })
    const user = await userModel.findOne({ email: email })
    if (!user) return res.status(401).send({ status: "Error", error: "User Not Found" })
    if (!isValidPassword(user, password)) return
})
export default router