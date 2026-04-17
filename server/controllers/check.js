const { ApiLogs } = require("../models/Logs");
const { getIO } = require("../sockets/Scokets");

const check = async (req, res) => {
    try {
        const io = getIO();
        const realtimeApilogs = req.body;
        console.log(req.body);
    
        if (!realtimeApilogs) {
            return res.status(400).json({
                success: false,
                message: "Missing logs data"
            });
        }
        const saveLogs = await ApiLogs.create(realtimeApilogs);
        if (realtimeApilogs.status === "SUCCESS") {
            return io.emit("CheckLogsNotif", saveLogs); // better send saved data
        }

        return res.status(200).json({
            success: true,
        });

    } catch (error) {
        console.error("Error:", error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = check;