const mongoose = require("mongoose");
require("dotenv").config();
const User = require("./models/userModel")
const Resume = require("./models/resumeModel")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DB connected");
    } catch (error) {
        console.log(error);
    }
};

module.exports = { connectDB, Resume, User };