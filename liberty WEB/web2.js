//function openMenu(){
  //  window.event.preventDefault();
  //  window.event.target.previousElementSibling.classList.toggole("hide")
}
//function myFunction() {
   // window.event.target.previousElementSibling.classList.toggole("show")
}//
//var nav = document.getElementById('menu h-box2');
//nav.addEventListener('click', function(){
  //  nav.classList.toggle('web2');
//
//})
function fun(){
    var x = lib.getElementById('h-box2')
    if( x.style.display === "flex"){ 
        x.style.display = "none";
    }
    else{
        x.style.display ="flex";
    }
}
