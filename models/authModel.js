const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
        },
        password: {
            type: String
        },
    },
    { timestamps: true }
)

const Auth = mongoose.model('Auth', userSchema);
module.exports = Auth