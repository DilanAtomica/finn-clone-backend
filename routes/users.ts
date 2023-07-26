import {Request, Response} from "express";
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
const express = require("express");
const router = express.Router();
const {db} = require("../utils/DBconnect");
const {auth} = require("../firebase");

router.post("/login", async(req: Request, res: Response) => {
    try {
        await createUserWithEmailAndPassword(auth, "dilan@hotmail.com", "123asd123asD");
        res.status(200).json({message: "Logged in Successfully!"});
    } catch (error) {
        res.status(400).json({error: error});
    }

});


module.exports = router;