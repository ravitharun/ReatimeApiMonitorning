// {
//   originalUrl: '/api/Profile/Get?userid=Teacher-6087',
//   method: 'GET',
//   statusCode: 304,
//   responseTime: 8,
//   responseTimeStatus: 'FAST',
//   apihealth: 'REDIRECT',
//   healthscore: 60,
//   timestamp: 2026-04-17T01:46:01.866Z,
//   status: 'SUCCESS'
// }



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
    timeseries:true
})

const ApiLogs=new mongoose.model("APILOGS",Logs)
module.exports=ApiLogs