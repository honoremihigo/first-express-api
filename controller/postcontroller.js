const db = require('../config/db')
exports.postposts=(req,res)=>{
        const sql = "INSERT INTO posts VALUES(?)"
        const values = [
                req.body.id = null,
                req.body.title,
                req.body.content
        ]
        db.query(sql,[values],(err,data)=>{
                if(err) console.log(err);
                else res.json({
                        status:"201",
                        message:"post create successfully",
                        data:data
                })
        }) 
}

exports.getallpost = (req,res)=>{
        const sql= "SELECT * FROM posts"
        db.query(sql,(err,data)=>{
                if(err)  return console.log(err);
                else return res.json(data)
        })
}

exports.getonepost = (req,res)=>{
        const id = req.params.id
        const sql = `SELECT * FROM posts WHERE id=${id}`
        db.query(sql,(err, data)=>{
                if(err) return console.log(err);
                else return res.json(data)
        })
}

exports.deletepost = (req,res)=>{
        const id = req.params.id
        const sql = `DELETE FROM posts WHERE id = ${id}`
        db.query(sql,(err,data)=>{
                if(err) return console.log(err);
                else res.json({
                        status:"201",
                        message:"post delete successfully",
                        data:data
                })
        })
}

exports.editpost = (req,res) =>{
        const id = req.params.id
        const sql = "UPDATE posts SET title=? , content = ? WHERE id=?"
        db.query(sql,[req.body.title,req.body.content,id],(err,data)=>{
                if(err) return console.log(err);
                else res.json({
                        status:"201",
                        message:"post edited successfully",
                        data:data 
                })
        })
}


const { resolve } = require("bluebird");
const DataBase = require("mysql2"); // import the class

const pool = DataBase.createPool({
    host: 'localhost' ,
    user: 'root',
    database: 'todo_app',
    password: ''
}).promise();

modules.exports = db