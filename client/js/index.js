
window.onload=()=>{
  var header=document.getElementById("header"),
      footer=document.getElementById("footer"),
      body=document.querySelector("body");
        //console.log(body);
    /* 头部引入 */
    ajax({
      url:"http://localhost:3000/header.html",
      type:"get",
      dataType:"string"
     }).then(function(res){
       console.log(res);
        header.innerHTML=res;
        var script=document.createElement("script")
        script.src="./js/header.js"
        body.appendChild(script)
        console.log("sss");
     })
    /* 尾部引入 */
    ajax({
        url:"http://localhost:3000/footer.html",
        type:"get",
        dataType:"string"
     }).then(function(res){
          footer.innerHTML=res;
     })
}
      //轮播图
      (function(){
        function slide(){
       var imgShow=document.querySelector(
         "#slider>img.imgShow"
       );
       var Show=document.querySelector(
         "ul.swipe_bottom li.show")
       imgShow.className="";
       Show.className="";
       if(imgShow.nextElementSibling!=null){
         Show.nextElementSibling.className="show";
         imgShow.nextElementSibling.className="imgShow";
       }else{imgShow.parentNode.children[0].className="imgShow";
       Show.parentNode.children[0].className="show";}
         
     }
     var timer=setInterval(slide,3000);
 
     var slider=document.getElementById("slider");
     slider.onmouseover=function(){
       clearInterval(timer);
       timer=null;
     }
     slider.onmouseout=function(){
       timer=setInterval(slide,3000);
     }
     var imgs=slider.children;
     for(var img of imgs){
       img.onclick=function(){
         var img=this;
         alert(img.alt);
       }
     }
   })();
 
   //section_right_right
   //底部轮播
  //  (function(){
  //    function slide(){
  //      var imgShow=document.querySelector(
  //        "ul.bottom_swiper>li>div>div>img.show"
  //      );
  //      var Show=document.querySelector(
  //        "ul.bottom_swiper>li>div>ul>li.show3")
  //      imgShow.className="";
  //      Show.className="";
  //      if(imgShow.nextElementSibling!=null){
  //        Show.nextElementSibling.className="show";
  //        imgShow.nextElementSibling.className="imgShow";
  //      }else{imgShow.parentNode.children[0].className="imgShow";
  //      Show.parentNode.children[0].className="show";}
         
  //    }
  //    var timer=setInterval(slide,3000);
 
  //    var slider=document.getElementById("slider");
  //    slider.onmouseover=function(){
  //      clearInterval(timer);
  //      timer=null;
  //    }
  //    slider.onmouseout=function(){
  //      timer=setInterval(slide,3000);
  //    }
  //    var imgs=slider.children;
  //    for(var img of imgs){
  //      img.onclick=function(){
  //        var img=this;
  //        alert(img.alt);
  //      }
  //    }
  //  })();
