const User = require("../models/userModel")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")


// function to generate a token
const createToken = (id, email, role) => {
    return jwt.sign(
        { data: { id, email, role } },
        process.env.JWT_KEY,
        { expiresIn: "1d" }
    )
}


// register or SignUp
module.exports.signUP = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        // Before creating a new user, we verify if this user already exists or not
        const userEmailExist = await User.findOne({ email });
        if (userEmailExist) {
            return res.status(409).json({ message: "User with this email is already Exist!" });
        }
        // crypt password
        const salt = await bcrypt.genSalt(10);
        const cryptPassword = await bcrypt.hash(password, salt);

        // A new user created!!!
        const user = await User.create({
            fullName,
            email,
            password: cryptPassword,
            
        });

        return res.status(201).json({ message: " successfully creation User  ...", user });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error", error });
    }
}

// Connection or signIn
module.exports.signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        // we verify if this  user exist if everything is ok we continued with the function next() !!!
        if (!user) {
            return res.status(401).json({ message: "Email or Password Incorrect" })
        }
        const comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return res.status(401).json({ message: "Email or Password Incorrect" })
        }
        const token = createToken(user._id, user.email, user.role)
        res.status(200).json({ message: "Successfully connection", token, user });
    } catch (error) {
        console.log(error);

        res.status(500).send({ message: "Internal Server Error" });
    }
}