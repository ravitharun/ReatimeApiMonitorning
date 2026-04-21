
const cloudinary = require("../config/cloudnary")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const user = require("../models/User");
const AuthNewUser = async (req, res) => {
    const saltRounds = 10;
    try {


        const userinfo = req.body

        const result = await cloudinary.uploader.upload(req.file?.path);
        const hash = await bcrypt.hash(userinfo.userPassword, saltRounds);
        const saveuser = await user({
            username: userinfo.username,
            userRole: userinfo.userRole,
            userEmpId: userinfo.userEmpId,
            userEmail: userinfo.userEmail,
            userPassword: hash,
            userProfile: result.secure_url
        })
        await saveuser.save()

        return res.status(200).json({ status: "true", message: "userNew Account" })
    } catch (error) {
        console.log(error.message);

        return res.status(500).json({ message: error })

    }
}
const LoginUser = async (req, res) => {
    try {


        const { userEmail, userPassword, role } = req.query;
        console.log({ userEmail, userPassword, role });
        if (!userEmail || !userPassword || !role) { return res.status(404).json({ message: "Inputs are missing." }) }

        const getuser = await user.findOne({ userEmail: userEmail })
        console.log(getuser, 'getuser');

        if (getuser == null) {
            console.log({ message: "User not found with these email." });

            return res.status(403).json({ message: "User not found." })
        }
        const hashpasswordcompare = await bcrypt.compare(userPassword, getuser.userPassword)


        if (!hashpasswordcompare) {
            console.log({ status: true, message: "Password is incorrect" });

            return res.status(400).json({ status: true, message: "Password is incorrect" })
        }
        if (getuser.userRole != role) {
            console.log({ status: true, message: "role is incorrect" });
            return res.status(400).json({ status: true, message: "role  is incorrect" })

        }
        const token = jwt.sign({ userEmail, role }, process.env.JWT_SECRET_KEY)
        res.status(200).json({ status: true, message: "ok", token: token, user: getuser })
    } catch (error) {
        console.log(error.message);

        return res.status(500).json({ message: error })

    }
}
module.exports = { AuthNewUser, LoginUser }