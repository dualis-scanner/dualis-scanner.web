import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.get("/register", (req, res) => {
    res.json({
        "userID": "123",
        "userHash": "456"
    });
});

export default router;