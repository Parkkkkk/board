const express = require('express')
const multer = require('multer')
const fs = require('fs')
const path = require('path')
const {Post} = require('../models')


const router = express.Router();


// upload 폴더가 없으면 폴더 생성  
fs.readdir('uploads' , (error) => {
    if(error) {
        console.error('uploads folder not found')
        fs.mkdirSync('uploads');
    }
});

const storage = multer ({
    storage : multer.diskStorage({
        destination (req ,file ,cb) {
            cb(null, 'uploads/');
        },
        filename (req, file, cb) {
            const ext = path.extname(file.originalname);
            cb(null, path.basename(file.originalname ,ext) + new Date().valueOf() + ext)
        },
    }),
    limits : { fileSize : 5 * 1024 * 1024 },
});



//single image upload 
router.post('/img' , storage.single('img'), (req, res) => {
    console.log(req.body);
    return res.json({ url : `/img/${req.file.filename}`});
})


//All post list 
//title => link
router.get('/postlist' , async (req, res) => {
    try {
        const list = await Post.findAll({ attributes: ['id','title', 'userId'] })
        return res.send(list);
    } catch(error) {
        console.log(error);
    }
})


//title click => get content
router.get('/:id' , async (req, res) => {
    try{
        console.log(req.params.id)
        const content = await Post.findOne({ 
              where : { id : req.params.id },
                  attributes : ['title', 'content', 'img']
                    });
        return res.send(content)
    } catch(error) {
        return res.send(error);
    }
})

//post 
//include image url
router.post('/' ,storage.single('img'), async (req, res) => {
    try {
        console.log(req.file)
        const { title , content } = req.body;
        if (!title) {
            return res.send({ code : 400 , message : '제목을 입력해주세요'})
        } else if (!content) {
            return res.send({ code : 400 , message : '내용을 입력해주세요'})
        } else {
            const post = await Post.create({ 
                title : title,
                content : content,
                img : `/img/${req.file.filename}` | null,
                userId : req.body.userId
            })
            return res.json(post);
        }
    } catch(error) {
        console.log(error);
        return res.send(error);
    }      
})

router.delete('/:id' , async (req, res) => {
    try {
        await Post.destroy({ where : { id : req.params.id }});
        return res.send({ message : '삭제 되었습니다.'})
    } catch(error) {
        return res.send(error);
    }
})

router.put('/:id' , async (req, res) => {
    try {
        const { title , content } = req.body;
        await Post.update({
            title,
            content
        },{ 
            where : { id : req.param.id }
          });
        return res.send({ message : '수정 되었습니다'});
    } catch(error) {
        return res.send(error);
    }
})

module.exports = router
