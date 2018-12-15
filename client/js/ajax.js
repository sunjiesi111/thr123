//创建ajax函数,传入对象参数
function ajax({url,type,data,dataType}){
	//定义promise函数，避免在向服务器发送多条请求时，进入回调地狱
	return new Promise(function(open,err){
		//1.创建xhr对象
		var xhr=new XMLHttpRequest()
		//2.绑定监听事件
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
			//判断客服端发送请求的数据是否为json格式，如果是json格式，就使用json的parse方式对数据进行解析
				if(dataType==="undefined"&&dataType.toLowerCase()==="json"){
					var res=JSON.parse(xhr.responseText)
				}else{
					var res=xhr.responseText
				}
				//打开连接
				open(res);
			}
		}	
			//判断客服端请求的方法是否为get并且不为undefined,如果是就用字符串拼接方式来改url
			if(type.toLowerCase()==="get"&&data!=="undefined"){
				url+="?"+data
			}
		//3.打开连接
			xhr.open(type,url,true)
			//判断请求类型是否为post方法，如果是就使用xhr下的setRequestHeader方法修改请求数据
				if(type.toLowerCase()==="post")
				xhr.setRequestHeader("Content-Type","application/x-www-from-urlencoded");
		//4.发送请求
			//判断请求方法，是post的情况下xhr.send(data),不是的话为null
				if(type.toLowerCase()==="post"&&data!=="undefined")
					xhr.send(data)
				else
					xhr.send(null)
		}
	)
}