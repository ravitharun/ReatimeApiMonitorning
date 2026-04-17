
const cloudinary = require("../config/cloudnary")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AuthNewUser = async (req, res) => {
    const saltRounds = 10;
    try {


        const userinfo = req.body
        let data = {
            userPassword: userinfo.userPassword,
            useremail: userinfo.userEmail,
        }
        const result = await cloudinary.uploader.upload(req.file?.path);
        const hash = await bcrypt.hash(userinfo.userPassword, saltRounds);
        const token = jwt.sign(data, process.env.JWT_SECRET_KEY);
        // const saveuser=await 
        return res.status(200).json({ status: "true", message: "userNew Account " })
    } catch (error) {
        console.log(error.message);

        return res.status(500).json({ message: error })

    }
}
module.exports = AuthNewUser