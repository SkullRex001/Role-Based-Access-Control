const UserData = require("../models/user");
async function storedata(req , res , next) {
    let email = req.headers.email;
    let password = req.headers.password;

   await UserData.create({
        email , password
    })

    next();
}

module.exports = storedata;