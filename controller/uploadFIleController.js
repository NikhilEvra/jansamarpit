// const multer = require('multer');

// const AppError = require('../utilities/appError');
// const catchAsync = require('../utilities/catchAsync');

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//       cb(null, 'public/video')
//   },
//   filename: (req, file, cb) => {
//       cb(null, Date.now() + '-' + file.originalname)
//   },
// })
// // const storage = multer.memoryStorage();

// const upload = multer({ storage })

//   exports.uploadSingleVideo = upload.fields([
//     { name : 'singleVideo', maxCount: 1 }
//   ]);

//   exports.resizeVideo = catchAsync(async(req, res, next) => {

//     if(!req.files.singleVideo) return next();

//     res.status(200).json({
//       status : 'success',
//       message : 'Upload Successful'
//     });
//   // 1) Cover image
//       // req.body.singleVideo = `tour-${Date.now()}-cover.mp4`;     
 
//   });


  // exports.testApi = catchAsync(async(req, res, next) => {

  //   const url = 'https://car-api2.p.rapidapi.com/api/models?sort=id&direction=asc&verbose=yes';

  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '8f5e1be94fmshce7178f3f8d1864p134588jsn6b1edc726666',
  //       'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
  //     }
  //   };
  //   const response = await fetch(url, options);
  //   const result = await response.json();
    
  //   res.status(200).json({
  //     status : 'success',
  //     data : result
  //   })

  // })