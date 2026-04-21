const { ApiLogs } = require("../models/Logs")

const getLogs = async (req, res) => {
    try {
        const getallLogs = await ApiLogs.find({})
        if (getallLogs.lenght == 0) {
            return res.status(200).json({ sucess: true, message: "No Logs Found" })
        }
        return res.status(200).json({ sucess: true, message: getallLogs })
    } catch (error) {
        console.log(error.message, 'error.message');

        return res.status(500).json({ sucess: false, message: error.message })
    }
}


module.exports=getLogs