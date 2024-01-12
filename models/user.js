const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email : String , password : String
})

const UserData =  mongoose.model('userdata' , UserSchema);

module.exports = UserData;
