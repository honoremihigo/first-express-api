const express = require('express')
const app = express()
const postrouter = require('./router/postRouter')
app.use(express.json())
app.use('/api/posts', postrouter)



app.listen(5000, () => {
    console.log('http://localhost:5000');
})


