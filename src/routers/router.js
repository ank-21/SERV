const express = require('express');
const router = express.Router();
const Visitor = require('../models/Visitor');
const {sendMail } = require('../account/nodemailer');


router.post('/visitor/signup',(req,res) => {
    console.log("req body",req.body);
    const visitor = new Visitor(req.body);
    visitor.save()
        .then((data)=>{
            res.render('dashboard-visitor',{
                list:data
            });
        }).catch((e)=>{
            console.log("err",e);
            res.sendFile(path.join(__dirname, '../public', 'index.html'));
        })
});

router.post('/employee/login',(req,res)=>{
    const dummypassword = "employee";
    const email = req.body.emailid
    if(req.body.password === dummypassword){
        res.redirect(`/dashboard?user=employee&emailid=${email}`);       
    }else{
        res.sendFile(path.join(__dirname, '../public', 'index.html'));
    }
});

router.get('/dashboard', async(req,res)=> {
    const email = req.query.emailid;
    
    if(req.query.user == 'employee'){
        console.log("i am from employee");
        const lists = await Visitor.find();
        res.render('dashboard-employee',{
            lists,
            email
        })
        
    }
});

router.post('/employee/msg',(req,res)=>{
    const data = req.body;
    console.log("req body",req.body);
    
    res.send({data});
    sendMail({data});
    //res.redirect(`/dashboard?user=employee&emailid=${req.body.emailidemployee}`); 
})



module.exports = router;