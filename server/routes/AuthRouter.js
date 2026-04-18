const express = require("express")
const {AuthNewUser,LoginUser} = require("../controllers/Auth")
const upload = require("../config/mutler")
const Auth = express.Router()
Auth.post("/NewAccount", upload.single("userProfile"), AuthNewUser)
Auth.get("/Login", LoginUser)
module.exports = Auth