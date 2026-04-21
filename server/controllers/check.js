const { ApiLogs } = require("../models/Logs");
const { getIO } = require("../sockets/Scokets");

const check = async (req, res) => {
    try {
        const io = getIO();
        const realtimeApilogs = req.body;
        console.log(req.body, 'api LOgs monitoring.');

        if (!realtimeApilogs) {
            return res.status(400).json({
                success: false,
                message: "Missing logs data"
            });
        }
        const saveLogs = await ApiLogs.create(realtimeApilogs);
        io.emit("Notify", "Update: New logs added. Review status.");
        if (realtimeApilogs.status === "SUCCESS") {
            return io.emit("CheckLogsNotif", saveLogs);
        }

        return res.status(200).json({
            success: true,
        });

    } catch (error) {
        console.error("Error:", error.message);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = check;