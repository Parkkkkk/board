const express = require('express')
const cookieparser = require('cookie-parser')
const AuthRouter = require('./routes/auth')
const PostRouter = require('./routes/edit')
const path = require('path')
const { sequelize } = require('./models')


const app = express();
sequelize.sync();

app.set('port' ,process.env.PORT || 3030)


app.use('/img', express.static(path.join(__dirname, 'uploads')));
app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));
app.use('/auth' , AuthRouter);
app.use('/post' , PostRouter);



app.listen(app.get('port') , () => {
    console.log('success connection!')
})