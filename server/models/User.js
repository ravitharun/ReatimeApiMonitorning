const mongooes = require("mongoose")
const userModel = new mongooes.Schema({
    username: { type: String, required: true },
    userRole: { type: String, enum: "TEAM_LEADER" | "DEVELOPER", default: "DEVELOPER " },
    userEmpId: {
        type: String, required: true, unique: true,
    },
    userEmail: {
        type: String, required: true, unique: true,
    },
    isActive: {
        type: Boolean, default: false
    },
    userPassword: { type: String, required: true },
    userProfile: { type: String, required: true },
    lastSeen: { type: String, default: new Date() }
}, { timestamps: true })


const user = mongooes.model("userLogin", userModel)
module.exports = user

