1.静态私有属性：private  static property
只能内部访问，外部无法调用  
(function(){
	var user="adasd"//static provate prototype
	利用闭包拿到属性Person=function(){return user}
})()
2.私有变量
 fucntion asd(){
 var name='asdasd' //private variables
}
3.实例属性
fucntion(){
	this.name='奥术大师多'//
}