const mysql = require('mysql')
    const db = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'blog_db'
    })
 
    module.exports = db