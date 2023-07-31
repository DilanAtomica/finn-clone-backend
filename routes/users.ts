import {Request, Response} from "express";
const express = require("express");
const router = express.Router();
const {db} = require("../utils/DBconnect");
const verifyToken = require("../utils/auth");

router.post("/register", async(req: Request, res: Response) => {
    try {

    } catch (error) {
        res.status(400).json({error: error});
    }
});

router.post("/login", async(req: Request, res: Response) => {
    try {
        const {email, password} = req.body.inputData

        res.status(200).json({message: "Logged in Successfully!"});

    } catch (error) {
        res.status(400).json({error: error});
    }
});

router.post("/logout", async(req: Request, res: Response) => {
    try {

        res.status(200).json({message: "Logged out successfully!"});
    } catch (error) {
        res.status(400).json({error: error});
    }
});

router.get("/test", verifyToken, async(req: Request, res: Response) => {
    try {
        console.log("LOL")
        res.status(200).json({message: "Yes, you are authenticated!"});
    } catch (error) {
        res.status(400).json({error: error});
    }
});


module.exports = router;