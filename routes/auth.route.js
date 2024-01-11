
const express = require('express')
const router = express.Router()

router.get('/login' , (req , res, next)=>{

    res.render('Login.ejs')

})
router.get('/register' , (req , res, next)=>{
    res.render('Register.ejs')
    
})
router.post('/login' , (req , res, next)=>{
    
})
router.post('/register' , (req , res, next)=>{
    
})
router.get('/logout' , (req , res, next)=>{
    
})

module.exports = router;