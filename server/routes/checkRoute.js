const express = require("express")
const check = require("../controllers/check")
const AppExp = express.Router()
AppExp.get("/check",
    check
)
module.exports = AppExp