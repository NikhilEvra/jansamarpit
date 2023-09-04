const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const hpp = require('hpp');
const compression = require('compression');
const cors = require('cors');

const AppError = require('./utilities/appError');
const globalErrorController = require('./controller/errorController');

const authRoutes = require('./routes/authRoutes');


// // start express app
const app = express();

app.enable('trust proxy');

app.use(helmet());

// Development Logging
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}


//Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' })); //This is for Add Something in DB
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.options('*', cors());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      'phone',
      'otp'
    ]
  })
);

app.use(compression());

// Routes
app.use('/api/v1/auth', authRoutes);

// this middleware used for all unhandled routes that we not created
app.all('*', (req,res,next) => {
    // res
    //     .status(404)
    //     .json({
    //         status: 'Fail',
    //         message: 'This route is not available yet'
    //     });
    next(new AppError('This route is not available yet', 404));
})

app.use(globalErrorController);

module.exports = app;