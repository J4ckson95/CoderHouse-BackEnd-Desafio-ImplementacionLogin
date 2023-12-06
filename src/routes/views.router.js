import { Router } from "express";

const router = Router()
const sessionIn = (req, res, next) => {
    if (req.session?.user) return res.redirect("/index")
    return next()
}
router.get("/login", sessionIn, (req, res) => {
    return res.render("login", {})
})
router.get("/register", sessionIn, (req, res) => {
    return res.render("register", {})
})
export default router