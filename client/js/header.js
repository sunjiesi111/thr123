//头部上层二维码显示
var d1=document.getElementById("d1");
var d2=document.getElementById("d2");
d1.onmouseover=function(){
    d2.style.display="block";
}
d1.onmouseout=function(){
    d2.style.display="none";
}
//头部广告点击消失
var d3=document.getElementById("d3");
var d4=document.getElementById("d4");
d3.onclick=function(){
    var a=1;
    var timer=setInterval(function(){
        a-=0.1;
        d4.style.opacity=a
        if(a<=0){d4.style.display="none"
    clearInterval(timer)}
    },100)
}



var d5=document.getElementById("d5");
var d6=document.getElementById("d6");
d5.onmouseover=function(){
    d6.style.height="100%"
    d6.style.opacity="1";
    
}
d5.onmouseout=function(){
    d6.style.opacity="0";
    d6.style.height="0"
}
var checkbox=document.getElementsByClassName("checkbox")[0]
var choose=checkbox.children;
for(var i in choose){
    choose[i].onclick=function(){
        var choo=this;
        var text=this.textContent
        this.textContent=checkbox.previousElementSibling.textContent
        checkbox.previousElementSibling.textContent=text
    }
}








//侧边栏
var d7=document.getElementById("d7");
var d8=document.getElementById("d8");
		//绑定事件
		d7.onclick=function(){
			var d7=this;
			//查找要修改的元素
			//修改元素
			if(d7.innerHTML=="↑↑↑"){
				//d1.style.display="none";
				d8.style.display="none";
				d7.innerHTML="↓↓↓";
			}else{
				//d1.style.display="block";
				d8.style.display="block";
				d7.innerHTML="↑↑↑";
			}//如果innerHTML->textContent
        }
        
