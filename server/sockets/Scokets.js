
const User = require("../models/User")
let io;

const initSocket = (server) => {
    const { Server } = require("socket.io");

    io = new Server(server, {
        cors: {
            origin: ["http://localhost:5174", "http://localhost:5173"],
            methods: ["GET", "POST"],
        },
    });

    io.on("connection", async (socket) => {
        console.log("⚡ User connected:", socket.id);
        const onlineUsers = new Map()
        const userid = socket.handshake.query.userId
        onlineUsers.set(userid, socket.id);
        const userUpdateActive = await User.findOneAndUpdate({ userEmpId: userid }, { isActive: true }, { new: true })
        io.emit("UserActiveNotification", { msg: `hey ${userUpdateActive?.username}-${userUpdateActive?.userEmpId} is in online`, userUpdateActive })
        socket.on("disconnect", async () => {
            console.log("❌ User disconnected:", socket.id);

            const userUpdateActive = await User.findOneAndUpdate({ userEmpId: userid }, { isActive: false, lastSeen: new Date() }, { new: true })
            console.log(userUpdateActive, 'userUpdateActive')
            onlineUsers.delete(userid);
            io.emit("UserDeactiveNotification", { msg: `hey ${userUpdateActive?.username}-${userUpdateActive?.userEmpId} is in online`, userUpdateActive })
            io.emit("updatelocalstatus", userUpdateActive)
        });
    });

    return io;
};

const getIO = () => {
    if (!io) throw new Error("Socket not initialized");
    return io;
};

module.exports = { initSocket, getIO };