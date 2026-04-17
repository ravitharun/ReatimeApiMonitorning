const express = require("express")
const AuthNewUser = require("../controllers/Auth")
const upload = require("../config/mutler")
const Auth = express.Router()
Auth.post("/NewAccount",upload.single("userProfile"), AuthNewUser)
module.exports = Auth