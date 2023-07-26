import {Request, Response} from "express";
const express = require("express");
const router = express.Router();
const {db} = require("../utils/DBconnect");

router.get("/login", async(req: Request, res: Response) => {
    try {

    } catch (error) {
        res.status(400).json({error: error});
    }

});


module.exports = router;