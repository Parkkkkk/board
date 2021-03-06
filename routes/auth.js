const express = require('express')
const { User } = require('../models')
const bcrypt = require('bcrypt')
const router = express.Router()


router.post('/join' , async (req, res) => {
    const { email , password , nick } = req.body;
    try {
        const user = await User.findOne({ where : { email } })
        if(user) {
            return res.send({ code : 400 , message : '이미 존재하는 유저입니다.'})   
        }
        const hash = await bcrypt.hash(password , 12);
        await User.create({
            email,
            password : hash,
            nick
        })
        return res.send('Success')
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
})


router.post('/login' , async (req, res) => {
    const { email , password } = req.body;
    try {
        const user = await User.findOne({ where : { email }})
        if(user) {
            const PW = await bcrypt.compare(password , user.password);
            if(PW) {
                res.cookie('useremail' , email ,{
                    maxAge : 60*60*1000,
                    httpOnly : true
                })
                return res.send({ email : user.email , nick : user.nick });
            } else {
                return res.send({ code : 403 , message : '비밀번호가 일치하지 않습니다.'})
            }
        } else {
            return res.send({ code : 403 , message : '존재하지 않는 유저입니다.'})
        }
    } catch(error) {
        console.log(error);
        res.send(error);
    }
})



module.exports = router