const sidebar=document.getElementById("sidebar");

document.getElementById("menuBtn").onclick=function(){

sidebar.classList.add("active");

}

document.getElementById("closeBtn").onclick=function(){

sidebar.classList.remove("active");

}

document.getElementById("themeBtn").onclick=function(){

alert("Dark Mode Coming Soon");

}
