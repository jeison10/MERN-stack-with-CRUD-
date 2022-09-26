const mongoose = require('mongoose')


// creat how the data will be recorded on the mongoDb (the type of data)
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    }
});

const userModel = mongoose.model("users",UserSchema)
module.exports = userModel