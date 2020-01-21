const express=require('express')
var bodyParser = require('body-parser')
 
const app=new express

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});
app.get('/douban',(req,res)=>{
	const list=[
		{user:'mike',old:15},
		{user:'tom',old:16},
		{user:'kaier',old:17}
	]
	res.json({code:200,msg:'successful',data:list})
})

app.get('/list',(req,res)=>{
	console.log(req.query)
	res.json({code:200,msg:'success',data:req.body})
})
app.listen(3000,'127.0.0.1')