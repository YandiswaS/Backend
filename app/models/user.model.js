const mongoose = require("mongoose");const User = mongoose.model(
    "user",
    new mongoose.Schema({
        username: String,
        eamil: String,
        password: String,
        roles: [
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Role"
            }
        ]
    }));
    module.exports = User;