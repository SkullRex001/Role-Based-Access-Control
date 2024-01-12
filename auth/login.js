const UserData = require("../models/user");

async function loginMiddleware(req, res, next) {
    let username = req.headers.username;
    let password = req.headers.password;

    let findData = await UserData.findOne({
        username,
        password
    });

    if (!findData) {
      req.flash('error', 'Invalid username or password');
        next(); // Continue to the next middleware or route
    } else {
        next();
    }
}

module.exports = loginMiddleware;
