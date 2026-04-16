const { getIO } = require("../sockets/Scokets");

const check = async (req, res) => {
    try {
        const io = getIO();
        const { Apilogs } = req.body;
        console.log(Apilogs, 'logs from port 3000.')

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