// const unirest = require("unirest");
const con = require('../utilities/db');
const AppError = require('../utilities/appError');
const catchAsync = require('../utilities/catchAsync');


exports.signup = catchAsync(async(req, res, next) => {

    const sql = "SELECT * FROM user_master ORDER BY id DESC LIMIT 1";
    con.query(sql, (err, result) => {
        
       if(result.length == 0){
            let u_id = 1;            
            let uu_id = 'jan00' + u_id;

            const rand = Math.floor(Math.random() * 9000 + 1000);
            const phone = Number(req.body.phone);

            const sql2 = `SELECT COUNT(*) AS count FROM user_master WHERE phone='${phone}'`;  
        
            con.query(sql2, (err, result2) => {
                
                result2.forEach(el => {
                                       
                    if(el.count > 0){
                        return next(new AppError('Mobile Number Already Regestered!', 400));
                    }

                    const sql3 = "INSERT INTO user_master(u_id, phone, otp) VALUES(?)";
                    const val = [uu_id, phone, rand];
                    
                    con.query(sql3, [val], (err, result3) => {
                    
                        if(result3.affectedRows == 0) return next(new AppError('Something went wrong! Insert the records!'))
                        
                        
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
            })
       }else{
            result.forEach(el => {           
                let u_id = el.id + 1;                            
                let uu_id = 'jan00' + u_id;
    
                const rand = Math.floor(Math.random() * 9000 + 1000);
                const phone = Number(req.body.phone);
    
                const sql2 = `SELECT COUNT(*) AS count FROM user_master WHERE phone='${phone}'`;  
            
                con.query(sql2, (err, result2) => {
                    
                    result2.forEach(el => {
                                           
                        if(el.count > 0){
                            return next(new AppError('Mobile Number Already Regestered!', 400));
                        }
    
                        const sql3 = "INSERT INTO user_master(u_id, phone, otp) VALUES(?)";
                        const val = [uu_id, phone, rand];
                        
                        con.query(sql3, [val], (err, result3) => {
                        
                            if(result3.affectedRows == 0) return next(new AppError('Something went wrong! Insert the records!'))
                            
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
                })        
            })
       }
        
    })
});

// Login 

exports.login = catchAsync(async(req, res, next) => {
   
    const phone = req.body.phone;
    const sql = `SELECT * FROM user_master WHERE phone='${phone}' AND status='Active'`;
    con.query(sql, (err, result) => {

        if(result.length == 0) return next(new AppError('Invalid Credentials!', 400));

        const rand = Math.floor(Math.random() * 9000 + 1000);

        const sql2 = `UPDATE user_master SET otp=? WHERE phone='${phone}'`;
        con.query(sql2, rand, (err, result2) => {
            if(result2.affectedRows == 0) return next(new AppError('Something went wrong!', 400));

            const req = unirest("POST", "https://www.fast2sms.com/dev/bulkV2");
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

})