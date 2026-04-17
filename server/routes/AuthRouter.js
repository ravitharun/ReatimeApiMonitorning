const express = require("express")
const AuthNewUser = require("../controllers/Auth")
const upload = require("../config/mutler")
const userMidleware = require("../middleware/userMidileware")
const Auth = express.Router()
Auth.post("/NewAccount", upload.single("userProfile"), userMidleware, AuthNewUser)
module.exports = Auth