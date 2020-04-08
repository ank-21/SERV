# SERV Assignment

This is a simple REST API server implementation built on top of Node.js, Express.js with Mongoose.js for MongoDB integration.
The visitor will enter the details in the form regarding their details and will get their details in the dashboard page. Similarly employee can also logged in by their email id and a dummy password set as "employee". The Employee will get the list of all the visitors who have submitted the form. They can mail to the selected users.The E-Mail feature is built using Nodemailer.

## Getting Started
```bash
mdkir -p ~/Desktop/serv-intern
cd ~/Desktop/serv-intern
git clone https://github.com/ank-21/SERV
```

## Prerequisites
You need to have npm and Node.js, and MongoDB installed.

## Run Server
```bash
 # Install all dependencies
    npm install

# Start the server
    npm run dev
 ```
 
## Base URI for making requests
```bash
 http://localhost:8000/
```
 ## Routes
 
 ### POST Request
 ```bash
 http://localhost:8000/visitor/signup
 ```
 This route will allow visitor to fill his/her details with basic information like Name, Email Id, Mobile Number, Remarks and save all these fields in database

 *Email must be unique for each input
 
 ### POST Request
 ```bash
 http://localhost:8000/employee/login
 ```
 This route will allow employee to logged in the system with a mail id and the password as "employee". They will be redirect to dashboard url.


 
 ### GET Request
 ```bash
 http://localhost:8000/dashboard
 ```
 This route will display the profile page to the employee.The employee will get the list of all visitors who have registered.The employee can send mail to a particular visitor as well.

 ### POST Request
 ```bash
 http://localhost:8000/employee/msg
 ```
 This route will allow employee to send mail to the particular visitor they will select from the list of visitors who have registered.

 
 ## Workflow
 The Visitor will fill the form by entering basic details.
 All the details will then be saved in the database and the visitor will get their details in the dashboard page.
 The Employee can also fill the details of email id and a dummy password.
 The Employee will get table of all the visitors who have registered.
 The Employee can send mail as well to the particular visitor
 
 
## Assumptions
Visitor will fill the form regarding their details. Since Nodemailer uses a gmail account and gmail password to be mentioned in the auth object. But due to privacy i have saved the keys file with email and password with dummy details.


 
