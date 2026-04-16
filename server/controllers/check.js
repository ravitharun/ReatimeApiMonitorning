const { getIO } = require("../sockets/Scokets");

const check = async (req, res) => {
    try {
        const io = getIO();
        console.log("EMIT HAPPENED");
        io.emit("check", "Hello LMS");



        return res.status(200).json({
            success: true,
            message: "Event emitted successfully",
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