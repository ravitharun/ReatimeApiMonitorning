const ApiLogs = require("../models/Logs");
const { getIO } = require("../sockets/Scokets");

const check = async (req, res) => {
    try {
        const io = getIO();
        const { Apilogs } = req.body;
        console.log(Apilogs.status =='SUCCESS','Apilogs')
        if (Apilogs.status =='SUCCESS') {

             io.emit("CheckLogsNotif", Apilogs)
             return "email notification to be sent"

        }
        console.log(Apilogs, 'logs from port 3000.')
        const saveLogs = await ApiLogs.create(Apilogs)
        console.log(saveLogs, 'logs info Form DB');

        return res.status(200).json({
            success: true,
            message: req.body
        });

    } catch (error) {
        console.error("Socket emit error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

module.exports = check;