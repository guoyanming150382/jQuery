const express =require("express")
const bodyParser = require('body-parser')
const mysql=require("mysql")

const app=new express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// 链接数据库
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'nodemysql',
  port: '3306', 
  charset  : 'UTF8_GENERAL_CI'
});
connection.connect();

//插入数据
app.post("/zeng",(req,res)=>{
	var arr=req.body

	console.log("数据",arr.produce)
	var sendArr=[arr.produce,arr.headP,arr.moneyDate,arr.number]
	console.log("sendArr",sendArr)

	var  addSql = 'INSERT INTO nodemysql(produce,headP,moneyDate,number) VALUES(?,?,?,?)';
		var  addSqlParams = sendArr;

		connection.query(addSql,addSqlParams,function (err, result) {
		        if(err){
		         console.log('[INSERT ERROR] - ',err.message);
		         return;
		        }   
		       console.log('--------------------------INSERT----------------------------');    
		       console.log('INSERT ID:',result);        
		       console.log('-----------------------------------------------------------------\n\n');  
		});
})

// 查询所有数据
app.get("/cha",(req,res)=>{
	var  sql = 'SELECT * FROM nodemysql';

	connection.query(sql,function (err, result) {
	        if(err){
	          console.log('[SELECT ERROR] - ',err.message);
	          return;
	        }
	       console.log('--------------------------SELECT----------------------------');
	       console.log("PC",result);
	       console.log('------------------------------------------------------------\n\n');  
			res.json({code:200,msg:"成功",data:result})
	}); 
})
//按照ID查询
app.post("/IDcha",(req,res)=>{
	var id=req.body.id
	console.log("cha111",id)
	// var  sql = 'SELECT * FROM nodemysql where id='+id;
	var  sql = `SELECT * FROM nodemysql where id=${id}`
	connection.query(sql,function (err, result) {
	        if(err){
	          console.log('[SELECT ERROR] - ',err.message);
	          return;
	        }
	       console.log('--------------------------SELECT----------------------------');
	       console.log("PC",result);
	       console.log('------------------------------------------------------------\n\n');  
			res.json({code:200,msg:"查询成功",data:result})
	}); 
})
// 根据ID删除
app.post("/IDdell",(req,res)=>{
	var id=req.body.id
	console.log("删除",id)
	var delSql = 'DELETE FROM nodemysql where id='+id;
//删
	connection.query(delSql,function (err, result) {
	        if(err){
	          console.log('[DELETE ERROR] - ',err.message);
	          return;
	        }        
	 
	       console.log('--------------------------DELETE----------------------------');
	       console.log('DELETE affectedRows',result.affectedRows);
	       console.log('-----------------------------------------------------------------\n\n');  
		res.json({code:200,msg:"删除成功",data:result})
	});
	})

// 更新
app.post("/update",(req,res)=>{
	var arr=req.body
	console.log("修改数据",arr)
	var sendArr=[arr.produce,arr.headP,arr.moneyDate,arr.number,arr.id]

	var modSql = 'UPDATE nodemysql SET produce = ?,headP =?,moneyDate=?,number=? WHERE id = ?';
	var modSqlParams = sendArr;
	//改
	connection.query(modSql,modSqlParams,function (err, result) {
	   if(err){
	         console.log('[UPDATE ERROR] - ',err.message);
	         return;
	   }        
	  console.log('--------------------------UPDATE----------------------------');
	  console.log('UPDATE affectedRows',result.affectedRows);
	  console.log('-----------------------------------------------------------------\n\n');
		res.json({code:200,msg:"修改成功",data:result})
	});
})

app.listen(8001,'127.0.0.1')