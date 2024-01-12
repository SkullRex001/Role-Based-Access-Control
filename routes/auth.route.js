
const express = require('express')
const storedata = require('../auth/storedata')
const loginMiddleWare = require('../auth/login')
const router = express.Router()


router.get('/login' ,(req , res, next)=>{

    res.render('Login.ejs')

})
router.get('/register' , (req , res, next)=>{
    res.render('Register.ejs')
    
})
router.post('/login' , loginMiddleWare  , (req , res, next)=>{
    const Message = req.flash('error');
    res.render('Login.ejs' , {Message})
    
    
})
router.post('/register' , storedata ,  (req , res, next)=>{
    req.flash('error', 'Invalid username or password');
    let Message = req.flash();
    console.log(Message);
    res.render('Register.ejs' , {Message})
   
    
})
router.get('/logout' , (req , res, next)=>{
    
})

module.exports = router;