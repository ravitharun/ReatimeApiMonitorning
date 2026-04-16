const express = require("express")
const check = require("../controllers/check")
const AppExp = express.Router()
AppExp.post("/check",
    check
)
module.exports = AppExp