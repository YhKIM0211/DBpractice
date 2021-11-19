const mysql = require('mysql2');

const mysqlConnection = {//mysqlConnection객체를 생성 - 키:값(메소드)
    
    //database first connection
    init : function(){
        return mysql.createConnection({
                host: process.env.host,
                user: process.env.user,
                password: process.env.password,
                database: process.env.database,
                port: process.env.port
            });
        }, 
    
    //database connection
    open : function (db) {
        return db.connect(err=>{
            if(err){console.log('db err');} //에러있는경우
            console.log('db connected');
            });
    },
    
    //database  end
    close : function (db) {
        return db.end(err=>{
            if(err){console.log('db end err');} //에러있는경우
            console.log('db end success');
            });
        
    }
};

module.exports = mysqlConnection;
