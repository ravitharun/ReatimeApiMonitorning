const express = require("express")
const MakeTeams = require("../controllers/ManageTeams")
const Team = express.Router()
Team.post("/MakeTeams", MakeTeams)
module.exports = Team