const express = require('express')
const AuthRouter = require('./routes/auth')
const PostRouter = require('./routes/post')
const { sequelize } = require('./models')


const app = express();
const PORT = process.env.PORT || 3030;
sequelize.sync();

app.use(express.json());
app.use(express.urlencoded({ extended : false }));
app.use('/auth' , AuthRouter);
app.use('/user' , PostRouter);



app.listen(PORT , () => {
    console.log('success connection!')
})