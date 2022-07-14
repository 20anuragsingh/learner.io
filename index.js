
const express=require('express')
const http=require('http')
const fs=require('fs')
const req_data=require('./js/data')
const pug=require('pug')


app=express()
app.set('view engine','pug')
app.set('views','views/pug')
app.use(express.static(__dirname))
app.use(express.urlencoded());
app.get('/me',(req,res)=>{
    console.log('this is home page')
    // res.sendfile('index.html')
    res.render('index')
}) 
app.get('/',(req,res)=>{
    console.log('you are in pug')
    res.render('about',{me_name:'anurag'})
    
})
app.get('/t',(req,res)=>{
    console.log('you are in triyal')
    res.render('form')
})
app.get('/about',(req,res)=>{
    console.log('you are in about')
    res.sendfile('views/about.html')
})
app.get('/form',(req,res)=>{
    console.log('you are in fomn')
    res.sendfile('views/reservation.html')
})
app.post('/form', (req,res)=>{
    con=req.body
    console.log(typeof(con))
    console.log(con.date)
    console.log(typeof(con.date))
    const a=con.name
    const b=con.email
    const c=con.phoneNumber
    const d=con.gender
    const e=con.inp_date
    const f=con.message
    req_data.main_file(a,b,c,d,e,f)
    // res.send(google.com)
    res.redirect('/about')
})
app.listen(80,()=>{
    console.log('server started')
})

