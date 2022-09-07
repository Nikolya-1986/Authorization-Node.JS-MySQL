require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const indexRouter = require('./routes/index');

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({
    extended: false,
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', indexRouter); 

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, x-requested-with");
    next(); 
});

app.use((err, req, res, next) => {
    console.log(err);
    err.starusCode = er.starusCode || 500;
    err.message = err.message || 'Internal Server Error';
    res.status(err.starusCode).json({
        message: err.message,
    });
});

app.set('port', process.env.PORT || 3003);
app.listen(app.get('port'), () => {
    console.log(`Web app avalible at http://localhost:${app.get('port')}`);
});
