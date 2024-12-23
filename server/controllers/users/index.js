import express from "express"
import userModel from "../../models/Users/Users.js"
const router = express.Router()

router.get("/getalluser",(req,res)=>{
    try {
        res.status(200).json({msg:"get all users"})
        console.log("get all users");
    } catch (error) {
        res.status(500).json({msg:error})
    }
})

router.post("/register",(req,res)=>{
    try {
        let userData = req.body
        console.log(userData);
        res.status(200).json({msg:"user registered successfully"})
    } catch (error) {
        res.status(500).json({msg:error})
        console.log(error);
    }
})

export default router;