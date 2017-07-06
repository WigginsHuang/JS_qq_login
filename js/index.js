window.onload=drag;

function drag(){
	//获取对象
 var zuoyong=document.getElementsByClassName("login_logo_webqq")[0],
    remove=document.getElementById('ui_boxyClose'),
    login=document.getElementById('loginPanel'),
    loginState=document.getElementById('loginState'),
    ul=document.getElementById('loginStatePanel'),
    li=ul.getElementsByTagName('li'),
    logintxt=document.getElementById('login2qq_state_txt'),
    loginStateShow=document.getElementById('loginStateShow');
    //点击区域弹出下拉
    loginState.onclick=function(event){
     ul.style.display='block';
     //阻止冒泡 防止被覆盖
      event.stopPropagation();
      }
      //增加鼠标移上去 点击 移除的特效
    for (var i = 0; i < li.length; i++) {
    	li[i].onmouseover=function(){
            this.style.background='#567';
    	}
    	li[i].onmouseout=function(){

    		this.style.background='#fff';
    	}
    	li[i].onclick=function(event){
    	 event=event || window.event
         ul.style.display='none';
         var id=this.id;
         loginStateShow.className="login-state-show "+id;
         logintxt.innerHTML=this.childNodes[3].innerHTML;
         event.stopPropagation();

    	}
    }
    //点击任意地方让下拉框隐藏
    document.onclick=function(){
     ul.style.display='none';

    }
  remove.addEventListener('click',function(){login.style.display='none'},false)
  zuoyong.addEventListener('mousedown',fudow,false)

}
//鼠标按下的事件
function fudow(event){

event=event || window.event;

var odrg=document.getElementById('loginPanel'),
    //鼠标按下去的时候, 光标距离整个框的距离 有便于下面移动时的数据
    disx=event.clientX-odrg.offsetLeft,
    disy=event.clientY-odrg.offsetTop;
    //鼠标移动的事件
  document.onmousemove=function(event){
    fnmove(event,disx,disy)

  }

  document.onmouseup=function(event){     
   document.onmousemove=null;
   document.onmouseup=null;
  }


}

function fnmove(e,posx,posy){
var odrg=document.getElementById('loginPanel'),
    //鼠标移动时的坐标
     l=e.clientX-posx,
     t=e.clientY-posy,
     //屏幕的宽度和高度
     winW=document.documentElement.clientWidth || document.body.clientWidth,
     winH=document.documentElement.clientHeight || document.body.clientHeight,
     maxW=winW-odrg.offsetWidth-10,
     maxH=winH-odrg.offsetHeight;
   if (l<0) {
      l=0
   }
   else if (l>maxW) {
     l=maxW

   }
   if (t<0) {
   	t=10
   }
   else if (t>maxH) {
    t=maxH

   }
odrg.style.left=l+'px';
odrg.style.top=t+'px';
}