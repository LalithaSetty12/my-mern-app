const Users = require("../models/users")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

//register
const register = async (req, res) => {
    try {
        const userDetails = req.body;
        const foundUser = await Users.findOne({ email: userDetails.email });

        if (foundUser == null) {
            const hashedPassword = await bcrypt.hash(userDetails.password, 10);
            await Users.create({ ...userDetails, password: hashedPassword });
            res.status(201).json({ message: "user registered successfully" });
        } else {
            res.status(409).json({ message: "user already exists" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "failed to register user" });
    }
};

//login
const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const foundUser = await Users.findOne({ email: username });

        if (foundUser == null) {
            return res.status(404).json({ message: "User not found" });
        }

        const isCorrectPassword = await bcrypt.compare(password, foundUser.password);

        if (isCorrectPassword) {
            const token = jwt.sign(
                { role: foundUser.role, username: foundUser.email },
                process.env.Secret_key,
                { expiresIn: "10m" }
            );
            return res.status(200).json({ message: "Login successful", token });
        } else {
            return res.status(401).json({ message: "Invalid email or password" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "failed to login user" });
    }
}

//get all users
const getUsers = async (req, res) => {
    try {
        const foundUsers = await Users.find();
        if (foundUsers.length == 0) {
            return res.status(404).json({ message: "users not found" });
        }
        res.status(200).json({ foundUsers });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "failed to get user details" });
    }
}

//delete user
const deleteUser = async (req, res) => {
    try {
        const deletedUser = await Users.findByIdAndDelete(req.params.id);
        if (deletedUser == null) {
            return res.status(404).json({ message: "invalid userid" });
        }
        res.status(200).json({ message: "user details deleted" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "failed to delete user details" });
    }
};

//update user details
const updateUserDetails = async (req, res) => {
    try {
        const updatedUser = await Users.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedUser == null) {
            return res.status(404).json({ message: "invalid userid" });
        }
        res.status(200).json({ message: "updated user successfully", updatedUser });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "failed to update user details" });
    }
}

module.exports = { register, login, getUsers, deleteUser, updateUserDetails };