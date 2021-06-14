function sys(){alert(" OS: Windows XP + RAM: 10MB ")}
function github(){window.open("https://github.com/ibzann")}
function info(){var element=document.getElementById("hash")
element.classList.add("hash_show")}
function rmv(){var element1=document.getElementById("hash")
element1.classList.remove("hash_show")}
function down(){document.getElementById("countdown").setAttribute('disabled','disabled');var timeleft=20;var downloadTimer=setInterval(function(){if(timeleft<=0){clearInterval(downloadTimer);document.getElementById("countdown").innerHTML="Download Started";window.location.href="etext.zip"
document.getElementById("countdown").removeAttribute('disabled','disabled');}else{document.getElementById("countdown").innerHTML=timeleft+"s remaining";}
timeleft-=1;},1000);}
document.addEventListener('contextmenu',function(e){e.preventDefault();});document.onkeydown=function(e){if(event.keyCode==123){return false;}
if(e.ctrlKey&&e.shiftKey&&e.keyCode=='I'.charCodeAt(0)){return false;}
if(e.ctrlKey&&e.shiftKey&&e.keyCode=='C'.charCodeAt(0)){return false;}
if(e.ctrlKey&&e.shiftKey&&e.keyCode=='J'.charCodeAt(0)){return false;}
if(e.ctrlKey&&e.keyCode=='U'.charCodeAt(0)){return false;}}
