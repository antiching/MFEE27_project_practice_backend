// 初始化 dotenv //可以不用引用這行（server.js檔案裡.env的變數載入記憶體裡）
//放這行的主因是希望可以增加模組的獨立性（不用依賴其他檔案）
require('dotenv').config();
// 使用資料庫
// npm i mysql2  取得promise版本
const mysql = require('mysql2');
const { application } = require('express');
let pool = mysql
  .createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    // 限制 pool 連線數的上限
    connectionLimit: 10,
    //sql會幫忙轉成ＪＳ的日期物件 很醜  保持date是string
    dateStrings: true,
  })
  .promise();

module.exports = pool;
