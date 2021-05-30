const express=require('express');
const app=express();
const port=process.env.PORT||9000;
const path=require('path');
const hbs=require('hbs');

const staticPath=path.join(__dirname,"../public");
const viewsPath=path.join(__dirname,"../templates/views");
const partialsPath=path.join(__dirname,"../templates/partials");
app.set('view engine',"hbs");
app.set('views',viewsPath);

hbs.registerPartials(partialsPath);


app.use(express.static(staticPath));
app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/about',(req,res)=>{
    res.render('about');
});
app.get('/contact',(req,res)=>{
    res.render('contact');
});
app.get('/login',(req,res)=>{
    res.render('login');
});
app.listen(port,(err)=>{
    if(err){
        console.log('server error');
    }
    else{
        console.log(`Server is listening on port ${port}`);
    }
});