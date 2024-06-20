var btn = document.getElementById("btn-mobile")
var menu = document.querySelector('.menu-mobile')
var list = menu.querySelector('.menu-list')

btn.addEventListener("click",function(){
   
   list.classList.toggle('ativo');
})