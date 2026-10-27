const express=require('express');
const app=express();
app.get('/',(req,res)=>{
  res.send('welcome to home page');
});
app.get('/about',(req,res)=>{
  res.send('welcome to about page');
});
app.get('/user/:id',(req,res)=>{
  res.send('User Id:'+req.params.id);
});
app.get('/search',(req,res)=>{
  res.send('Search Keyword '+req.query.name);
});
app.get('/product/:category/:id',(req,res)=>{
    const url=`/product/${req.params.category}/${req.params.id}`;
  res.send('Generated url:'+url);
});
app.listen(5000,()=>{
console.log('server is running on the port 5000');
});