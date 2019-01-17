const express = require('express')
const {Post} = require('../models')
const router = express.Router();


//title => link
router.get('/postlist' , async (req, res) => {
    try {
        const list = await Post.findAll({ attributes: ['id','title'] })
        return res.send(list);
    } catch(error) {
        console.log(error);
    }
})


//title click => content
router.get('/content/:id' , async (req, res) => {
    try{
        const content = await Post.findByPk({ where : req.params.id });
        return res.send(content)
    } catch(error) {
        return res.send(error);
    }
})

//post 
router.post('/post' , async (req, res) => {
    try {
        const { title , content , img } = req.body;
        if (!title) {
            return res.send({ code : 400 , message : '제목을 입력해주세요'})
        } else if (!content) {
            return res.send({ code : 400 , message : '내용을 입력해주세요'})
        } else {
            const post = await Post.create({ 
                title : title,
                content : content,
                img : img
            })
            return res.json(post);
        }
    } catch(error) {
        console.log(error);
        return res.send(error);
    }      
})

router.delete('/')









module.exports = router
