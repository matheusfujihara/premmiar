const mongoose = require('../config/database');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

UserSchema.pre('save', async function(next) {
    const hashcr = await bcrypt.hash(this.password, 10);
    this.password = hashcr;

    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
