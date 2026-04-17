const mongoose = require("mongoose")
const Logs = new mongoose.Schema({
    originalUrl: { type: String, required: true },
    method: { type: String, required: true },
    statusCode: { type: Number, required: true },
    responseTime: { type: Number, required: true },
    responseTimeStatus: { type: String, required: true },
    apihealth: { type: String, required: true },
    healthscore: { type: Number, required: true },
    timestamp: { type: Date, required: true },
    status: { type: String, enum: ["SUCCESS", "FAILURE"], required: true },
},{
    timestamps:true,
})

const ApiLogs = mongoose.model("ApiLog", Logs);
module.exports={ApiLogs}