// const unirest = require("unirest");
const con = require('../utilities/db');
const AppError = require('../utilities/appError');
const catchAsync = require('../utilities/catchAsync');

exports.signup = catchAsync(async(req, res, next) => {

    var date_ob = new Date();
    var day = ("0" + date_ob.getDate()).slice(-2);
    var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    var year = date_ob.getFullYear();
       
    var date = year + "-" + month + "-" + day;
    // console.log(date);
        
    var hours = date_ob.getHours();
    var minutes = date_ob.getMinutes();
    var seconds = date_ob.getSeconds();
  
    var dateTime =  hours + ":" + minutes + ":" + seconds;
    // console.log(dateTime);

    const sql = "SELECT * FROM user_master ORDER BY id DESC LIMIT 1";
    con.query(sql, (err, result) => {
        
       if(result.length == 0){
            let u_id = 1;            
            let uu_id = 'JAN/2023/' + u_id;

            const rand = Math.floor(Math.random() * 9000 + 1000);
            const phone = Number(req.body.phone);
            // console.log(req.body);
            const name = req.body.name;
            // const admin = req.body.admin;
            const email = req.body.email;
            const country = req.body.country;
            const state = req.body.state;
            const city = req.body.city;
            const id = req.body.id;
            const file = req.body.file;
            const file2 = req.body.file2;
            

// file upload code
const fs = require("fs");
var imageString = file;
var base64Data = imageString.replace("data:image/jpeg;base64,", "");

// Store Image into Server
fs.writeFile("uploads/" + rand +".png", base64Data, 'base64', function(err) {
  console.log(err);
});

const f = "https://jansamarpit.com/uploads/" + rand +".png";


// file upload code finish

// file upload code
const fs2 = require("fs");
var imageString2 = file2;
var base64Data2 = imageString2.replace("data:image/jpeg;base64,", "");

// Store Image into Server
fs2.writeFile("uploads/" + rand2 +".png", base64Data2, 'base64', function(err) {
  console.log(err);
});

const f2 = "https://jansamarpit.com/uploads/" + rand2 +".png";


// file upload code finish

            const sql2 = `SELECT COUNT(*) AS count FROM user_master WHERE phone='${phone}'`;  
        
            con.query(sql2, (err, result2) => {
                
                result2.forEach(el => {
                                       
                    if(el.count > 0){
                        return next(new AppError('Mobile Number Already Regestered!', 400));
                    }

                    const sql3 = "INSERT INTO user_master(u_id, name,phone,otp,email,date,time,country,state,city,id_proof,front_id,back_id) VALUES(?)";
                    const val = [uu_id,name, phone, rand, email, date , dateTime,country,state,city,id,f,f2];

                    con.query(sql3, [val], (err, result3) => {
                        console.log(result3);
                        console.log(err);
                        // const req = unirest.post("https://www.fast2sms.com/dev/bulkV2");
                        // req.headers({
                        //     "authorization": "hp6KLBVI8cAvnSu0yMXPk4F17JQUjH9moOC2Dzd3WftqaZsx5lKgEx4zbCIQHPjpnO7AVdsoYRXi2Z15"
                        // });
                        
                        // req.form({
                        //     "variables_values": `${rand}`,
                        //     "route": "otp",
                        //     "numbers": `${phone}`,
                        //   });
                                                      
                        //   req.end(res => {});
                          res.status(200).json({
                            status: 'success',
                            message: 'OTP Sent Successfully!'
                        })
                    })
                })                
            });

       } else{
            result.forEach(el => {           
                let u_id = el.id + 1;                            
                let uu_id = 'JAN/2023/' + u_id;
    
              
            const rand = Math.floor(Math.random() * 9000 + 1000);
            const phone = Number(req.body.phone);
            // console.log(req.body);
            const name = req.body.name;
            const admin = req.body.admin;
            const email = req.body.email;
            const country = req.body.country;
            const state = req.body.state;
            const city = req.body.city;
            const id = req.body.id;
            const file = req.body.file;
            const file2 = req.body.file2;
            

            const rand1 = Math.floor(Math.random() * 9000000 + 1000000);
            const rand2 = Math.floor(Math.random() * 9000000 + 1000000);

// file upload code
const fs = require("fs");
var imageString = file;
var base64Data = imageString.replace("data:image/jpeg;base64,", "");

// Store Image into Server
fs.writeFile("uploads/" + rand1 +".png", base64Data, 'base64', function(err) {
  console.log(err);
});

const f = "https://jansamarpit.com/uploads/" + rand1 +".png";


// file upload code finish

// file upload code
const fs2 = require("fs");
var imageString2 = file2;
var base64Data2 = imageString2.replace("data:image/jpeg;base64,", "");

// Store Image into Server
fs2.writeFile("uploads/" + rand2 +".png", base64Data2, 'base64', function(err) {
  console.log(err);
});

const f2 = "https://jansamarpit.com/uploads/" + rand2 +".png";
                




    // console.log(phone);
    // console.log(req.body);

                const sql2 = `SELECT COUNT(*) AS count FROM user_master WHERE phone='${phone}'`;  
            
                con.query(sql2, (err, result2) => {
                    
                    result2.forEach(el => { 
                                           
                        if(el.count > 0){
                            return next(new AppError('Mobile Number Already Regestered!', 400));
                        }
    
                        const sql3 = "INSERT INTO user_master(u_id, name,phone,otp,email,date,time,country,state,city,id_proof,front_id,back_id) VALUES(?)";
                        const val = [uu_id,name, phone, rand, email, date , dateTime,country,state,city,id,f,f2];
                        
                        con.query(sql3, [val], (err, result3) => {                                               
                            
                            // const req = unirest.post("https://www.fast2sms.com/dev/bulkV2");
                            // req.headers({
                            //     "authorization": "hp6KLBVI8cAvnSu0yMXPk4F17JQUjH9moOC2Dzd3WftqaZsx5lKgEx4zbCIQHPjpnO7AVdsoYRXi2Z15"
                            // });                        
                            // req.form({
                            //     "variables_values": `${rand}`,
                            //     "route": "otp",
                            //     "numbers": `${phone}`,
                            //   });
                            
                            //   req.end(res => {});
                              res.status(200).json({
                                status: 'success',
                                message: 'OTP Sent Successfully!',                                
                            })
                            
                        })
                    })                
                })        
            })
       }
        
    })
});

// Login 

exports.login = catchAsync(async(req, res, next) => {
   
    const phone = req.body.phone;
    console.log(phone)

    const sql = `SELECT * FROM user_master WHERE phone='${phone}' AND status='Active'`;
    con.query(sql, (err, result) => {

        if(result.length == 0) return next(new AppError('Invalid Phone Number!', 400));

        const rand = Math.floor(Math.random() * 9000 + 1000);

        const sql2 = `UPDATE user_master SET otp=? WHERE phone='${phone}'`;
        con.query(sql2, rand, (err, result2) => {


            // const req = unirest("POST", "https://www.fast2sms.com/dev/bulkV2");
            // req.headers({
            //     "authorization": "hp6KLBVI8cAvnSu0yMXPk4F17JQUjH9moOC2Dzd3WftqaZsx5lKgEx4zbCIQHPjpnO7AVdsoYRXi2Z15"
            // });
            // req.form({
            //     "variables_values": `${rand}`,
            //     "route": "otp",
            //     "numbers": `${phone}`,
            //   });

            //   req.end(res => {});
              res.status(200).json({
                status: 'success',
                message: 'OTP Sent Successfully!'
            })
        })
        
    })

});

exports.otpVerification = catchAsync(async(req, res,next) => {

    const phone = req.body.phone;
    const otp = req.body.otp;
    console.log(phone);
    console.log(otp);
    $sql = `SELECT * FROM user_master WHERE phone='${phone}' AND otp=${otp} AND status='Active'`;
    con.query($sql, (err, result) => {
        
     if(result.length == 0) return next(new AppError('Invalid Otp! Please Try Again!'));

        res.status(200).json({
            status : 'success',
            message : 'Otp validated successfully',
            data : result 
        })
    })

});

// exports.add_complaints = catchAsync(async(req, res,next) => {
//     var date_ob = new Date();
//     var day = ("0" + date_ob.getDate()).slice(-2);
//     var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
//     var year = date_ob.getFullYear();
       
//     var date = year + "-" + month + "-" + day;
//     // console.log(date);
        
//     var hours = date_ob.getHours();
//     var minutes = date_ob.getMinutes();
//     var seconds = date_ob.getSeconds();
  
//     var dateTime =  hours + ":" + minutes + ":" + seconds;


//     const city = req.body.city;
//     const remarks = req.body.remarks;
//     const priority = req.body.priority;
//     const state = req.body.state;
//     const name = req.body.name;     
//     const file = req.body.file;
//     const u_id = req.body.user_id;



//     console.log(req.body);


// // file upload code
// const fs = require("fs");
// var imageString = file;
// var base64Data = imageString.replace("data:image/jpeg;base64,", "");

// // Store Image into Server
// fs.writeFile("uploads/image.png", base64Data, 'base64', function(err) {
//   console.log(err);
// });


// // file upload code finish

//     const sql3 = "INSERT INTO complaint_master(name,user_id,state,district,priority,admin,date,time) VALUES(?)";
//                         const val = [name,u_id, remarks, city, priority, state, date, dateTime];
                        
//                         con.query(sql3, [val], (err, result3) => {                                               
                           
//                             console.log(result3);
//                             console.log(err);

//                               res.status(200).json({
//                                 status: 'success',
//                                 message: 'Complaint raised sucessfully',                
                                                
//                             })

//                         })

// })