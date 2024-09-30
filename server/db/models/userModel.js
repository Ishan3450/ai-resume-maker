const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    resumes: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "resume"
    }]
});

module.exports = new mongoose.model('user', UserSchema);