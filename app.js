const express = require('express')
const createHttpErrors = require('http-errors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const session = require('express-session');
const flash = require('connect-flash');
require('dotenv').config() 
const app = express()
const PORT = process.env.PORT || 3001 //if port not defined in .env use 3000

app.use(express.static(__dirname + "/public"));
app.set('view engine' , 'ejs')
app.use(flash());

mongoose.connect(process.env.MONGOOSE_LINK + 'RBAC').then(()=>{
    console.log('connected')
    app.listen(PORT , (err)=>{
        if(err) {
            console.log(err)
        }
        else{
            console.log(`port ${PORT} in running`) //no purpose of accepting request if database id down
        }
    })
}).catch((err)=>{
    console.log(err)
})



app.use(morgan('dev')) //shoes user request in terminal

app.use(session({
    secret : "yoo yooo", resave : false , saveUninitialized : false,

    cookie : {
        httpOnly : true, //does not allow client side script to see cookies. prevent xss
        sameSite : 'strict' //same origin for cookies, pervent CSRF
    }
}))


app.use('/' , require('./routes/index.route'));
app.use('/auth' , require('./routes/auth.route'))
app.use('/user' , require('./routes/user.route'))



app.use((req , res , next)=>{
    next(createHttpErrors.NotFound()) //create http error and contol goes to global error handler
})



app.use((error , req , res , next)=>{
    error.status = error.status || 500
    res.status(error.status).send(error);

})




