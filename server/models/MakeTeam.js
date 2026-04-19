const mongoose = require("mongoose")
const teamID = require("../TeamIDgenration")
const Team = new mongoose.Schema({
    teamName: { type: String, default: "Team" },
    teamId: { type: String, default: teamID },
    teamDesc: { type: String, default: "Descprition" },
    empIds: {
        type: [String],
        default: []
    },
    CreatedByID: { type: String, required: true },
    TotalMember: { type: String, default: 0 }
}, {
    timeseries: true
})

const Teams = mongoose.model("ManageTeam", Team)
module.exports = Teams