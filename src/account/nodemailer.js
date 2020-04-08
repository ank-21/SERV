var nodemailer = require('nodemailer')

const keys = require('../../config/keys')

const sendMail = ({data}) => {
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: keys.mail.email,           //email id
      pass: keys.mail.pass           //my gmail password
    },
    pool: true
  });
  console.log("data from nodemailer",data)
  var mailOptions = {
    from: keys.mail.email,
    to: `${data.email}`,
    subject:`SERV Enquiry`,
    html:`${data.msg}`
  };
  console.log("mailOptions : " ,mailOptions);
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}




module.exports = {
    sendMail
}