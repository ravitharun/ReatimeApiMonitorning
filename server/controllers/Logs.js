const { ApiLogs } = require("../models/Logs")
const { getIO } = require("../sockets/Scokets")

const getLogs = async (req, res) => {
    try {
        const io = getIO();

        const getallLogs = await ApiLogs.find({});

        if (getallLogs.length === 0) {
            return res.status(200).json({
                success: true,
                message: "No logs found",
                data: []
            });
        }

        // emit logs to all clients
        io.emit("GetInstantLogs", getallLogs);

        return res.status(200).json({
            success: true,
            message: "Logs fetched successfully",
            data: getallLogs
        });

    } catch (error) {
        console.log(error.message, "error.message");

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}


module.exports = getLogs