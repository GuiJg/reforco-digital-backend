const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
        },
        role: {
            type: String,
            enum: ['Aluno', 'Professor'],
        },
        password: {
            type: String
        },
        confirmPassword: {
            type: String
        },
    },
    { timestamps: true }
)

const Auth = mongoose.model('Auth', userSchema);
module.exports = Auth