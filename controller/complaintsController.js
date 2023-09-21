const con = require('../utilities/db');
const AppError = require('../utilities/appError');
const catchAsync = require('../utilities/catchAsync');


exports.add_complaints = catchAsync(async(req, res,next) => {
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


    const city = req.body.city;
    const remarks = req.body.remarks;
    const priority = req.body.priority;
    const state = req.body.state;
    const name = req.body.name;     
    const file = req.body.file;
    const u_id = req.body.user_id;

    const rand = Math.floor(Math.random() * 9000000 + 1000000);



    console.log(req.body);


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

    const sql3 = "INSERT INTO complaint_master(name,user_id,state,district,priority,admin,date,time,file) VALUES(?)";
                        const val = [name,u_id, remarks, city, priority, state, date, dateTime, f];
                        
                        con.query(sql3, [val], (err, result3) => {                                               
                           
                            console.log(result3);
                            console.log(err);

                              res.status(200).json({
                                status: 'success',
                                message: 'Complaint raised sucessfully',                
                                                
                            })

                        })

});


exports.get_complaints = catchAsync(async(req, res,next) => {

// const sql = "SELECT * FROM complaint_master ORDER BY id DESC LIMIT 1";
const sql = "SELECT * FROM complaint_master ORDER BY id ";

con.query(sql, (err, result) => {
    

                    //   result.status(200).json({
                    //     status: 'success',
                    //     message: 'OTP Sent Successfully!'
                    // })

                    res.send(result);
                
            }) 
       
});
               
        
  