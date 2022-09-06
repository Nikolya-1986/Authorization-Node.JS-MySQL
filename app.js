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

module.exports = app;

//Handing Errors
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


/*
Express — Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile 
applications. 

Express-validator — Express Validator is a set of Express. js middleware that wraps validator. js , a library that provides 
validator and sanitizer functions. Simply said, Express Validator is an Express middleware library that you can incorporate in your
apps for server-side data validation.

MySQL — MySQL an open-source relational database management system (RDBMS).

body-parser — Express body-parser is an npm library used to process data sent through an HTTP request body. It exposes four express 
middlewares for parsing text, JSON, url-encoded and raw data set through an HTTP request body. 

jsonwebtoken — This module provides Express middleware for validating JWTs (JSON Web Tokens) through the jsonwebtoken module. 
The decoded JWT payload is available on the request object.

bcryptjs — The bcrypt hashing function allows us to build a password security platform that scales with computation power and always 
hashes every password with a salt.

cors — CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

dotenv - Компонент Dotenv анализирует файлы .env, чтобы сделать переменные окружения, хранящиеся в них, доступными через getenv(), 
$_ENV или $_SERVER. Файлы .env предназначены для хранения переменных окружения. Для использования этой технологии достаточно создать в 
проекте файл с именем .env и внести в него переменные окружения

nodemon – это утилита интерфейса командной строки (CLI), разработанная @rem, которая отслеживает файловую систему приложения Node и 
автоматически перезапускает процесс, если есть такая необходимость

util - модуль поддерживает потребности внутренних API Node.js. Многие из утилит также полезны для разработчиков приложений и модулей. 
*/