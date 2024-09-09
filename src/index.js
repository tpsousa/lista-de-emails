const express = require('express');
const path = require('path');

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static('public'));

app.use(express.urlencoded({extended:true}));

let emails = [];

app.get('/',(req,res)=>{
  res.render('index')
;})

app.post('/sigup',(req,res)=>{
  const {email} = req.body;

  if(email){
    emails.push(email);
    res.redirect('/sucess');
  }else{
    res.redirect('/')
  }
})

app.get('/sucess',(req,res)=>{
  res.render('sucess');
})

app.get('/emails',(req,res)=>{
  res.render('sucess');
})

app.post('/emails/delete',(req,res)=>{
  const {email} = req.body;
  emails = emails.filter(item => item!==email);
  res.redirect('/emails');
})

const port = 3000;

app.listen(port,()=>{
  console.log('servidor funcionando com sucesso!');
})

