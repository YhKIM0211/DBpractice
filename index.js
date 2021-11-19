const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

//var let const의 차이
//https://velog.io/@marcus/2019-02-10-1702-%EC%9E%91%EC%84%B1%EB%90%A8
const app = express();
app.use(cors());
app.use(bodyparser.json());

const mysql = require('mysql2');
const dotenv = require('dotenv').config(); 
const mysqlConObj = require('./mysql'); //db모듈 디렉토리/파일명
const db = mysqlConObj.init();
mysqlConObj.open(db);



//arrow function js - https://ko.javascript.info/arrow-functions-basics 
app.listen(3000, ()=>{
    console.log('server listening on port 3000');
});
