import { Router } from "express";

const router = Router()

router.get("/signup", (req, res) => {
    res.send("Sign Up")
})
router.get("/login", (req, res) => {
    res.send("Login")
})
router.get("/logout", (req, res) => {
    res.send("Logout")
})

export default router;