const express= require('express');
const mysql = require ('mysql')
const cors = require('cors')

const app= express()
app.use(cors())

const db= mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'progettoweb'
})

app.get('/',(re,res)=>{
    return res.json("From Backed side");
})

app.get('/ktm',(req, res)=>{
    const sql = "SELECT * FROM ktm"
    db.query(sql, (err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/kawasaki',(req, res)=>{
    const sql = "SELECT * FROM kawasaki"
    db.query(sql, (err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/airoh',(req, res)=>{
    const sql = "SELECT * FROM airoh"
    db.query(sql, (err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/fox',(req, res)=>{
    const sql = "SELECT * FROM fox"
    db.query(sql, (err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/ufo',(req, res)=>{
    const sql = "SELECT * FROM ufo"
    db.query(sql, (err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/alpinestar',(req, res)=>{
    const sql = "SELECT * FROM alpinestar"
    db.query(sql, (err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8081,()=> {
    console.log("listening");
})