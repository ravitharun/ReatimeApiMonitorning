
// const jwt = require("jsonwebtoken")
const userMidleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            console.log({ message: "No token provided" })
            return res.status(401).json({ message: "No token provided" });
        }
        // const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        // req.user = decoded;
        next()
    } catch (err) {
        if (err.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token expired" });
        }
        console.log('Invalid token')
        return res.status(401).json({ message: "Invalid token" });
    }

}


module.exports = userMidleware