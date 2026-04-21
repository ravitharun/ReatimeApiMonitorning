const express=require("express")
const getLogs = require("../controllers/Logs")
const Logs=express.Router()
Logs.get("/Logs",getLogs)
module.exports=Logs