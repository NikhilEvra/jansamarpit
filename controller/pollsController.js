const con = require('../utilities/db');
const AppError = require('../utilities/appError');
const catchAsync = require('../utilities/catchAsync');
                   
    
exports. get_question = catchAsync(async(req, res,next) => {



    const sql = `SELECT * FROM poll_question WHERE type='MCQ' AND status = 'Active' ORDER BY id `;
    
    con.query(sql, (err, result) => {
         
                        res.send(result);
                    
                });
           
    });

        
exports. get_question_vs = catchAsync(async(req, res,next) => {



    const sql = `SELECT * FROM poll_question WHERE type='v/s' AND status = 'Active' ORDER BY id `;
    
    con.query(sql, (err, result) => {
         
                        res.send(result);
                    
                });
           
    });
    
    exports. get_question_yes_no = catchAsync(async(req, res,next) => {



        const sql = `SELECT * FROM poll_question WHERE type='yes no' AND status = 'Active' ORDER BY id `;
        
        con.query(sql, (err, result) => {
             
                            res.send(result);
                        
                    });
               
        });

        

exports.post_poll_answer = catchAsync(async(req, res,next) => {

const u_id = req.body.u_id;
const ans = req.body.answer;
const que = req.body.question;

const sql2 = `SELECT COUNT(*) AS count FROM poll_user_answer WHERE u_id='${u_id}' AND question='${que}' `;  

con.query(sql2, (err, result2) => {
    
result2.forEach(total => { 

if(total.count >= 1){
    console.log(total.count)
const sql3 = `UPDATE poll_user_answer SET answer=? WHERE question='${que}' AND u_id='${u_id}' `;
con.query(sql3, ans, (err, result2) => {



res.status(200).json({
status: 'success',
message: 'Re submitte dthe answer!'
})
})
}
else{
const sql = "INSERT INTO poll_user_answer(u_id,question,answer) VALUES(?)";
const val = [u_id,que,ans];

con.query(sql, [val], (err, result3) => {                                               

// console.log(result3);
// console.log(err);

res.status(200).json({
status: 'success',
message: 'Answerd Submitted!',                
    
})

})
}


}) 
})

});      



// exports.post_poll_answer = catchAsync(async(req, res,next) => {

//     const u_id = req.body.u_id;
//     const ans = req.body.answer;
//     const que = req.body.question;
    
    
//     const sql = `SELECT COUNT(*) AS count FROM poll_user_answer WHERE u_id='${u_id}' AND question='${que}' `;  
        
//     con.query(sql, (err, result) => {
         
//         result.forEach(el => { 

//             console.log(el.count)

//         })
                    
//                 });
   
//     });      
    


    
           
  