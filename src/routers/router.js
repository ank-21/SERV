const express = require('express');
const router = express.Router();
const Visitor = require('../models/Visitor');

router.post('/visitor/signup',(req,res) => {
    console.log("req body",req.body);
    const visitor = new Visitor(req.body);
    visitor.save()
        .then((data)=>{
            res.redirect('/dashboard?user=visitor');
        }).catch((e)=>{
            console.log("err",e);
            res.sendFile(path.join(__dirname, '../public', 'index.html'));
        })
});

router.post('/employee/login',(req,res)=>{
    const dummypassword = "employee";
    if(req.body.password === dummypassword){
        res.redirect('/dashboard?user=employee')        
    }else{
        res.sendFile(path.join(__dirname, '../public', 'index.html'));
    }
});

router.get('/dashboard',(req,res)=> {
    if(req.query.user == 'employee'){
        console.log("i am from employee");
        console.log("visitor",Visitor);
        
        res.render('dashboard',{
            Visitor
        })
        
    }else if(req.query.user == 'visitor'){
        console.log("i am from visitor");
        res.send("done");
    }
})



module.exports = router;