const express = require("express")
const {MakeTeams,getAllTeams} = require("../controllers/ManageTeams")
const Team = express.Router()
Team.post("/MakeTeams", MakeTeams)
Team.get("/GetTeams", getAllTeams)
module.exports = Team