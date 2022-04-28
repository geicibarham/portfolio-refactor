
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  
  let nav = document.getElementById("navbar")


  if ( document.documentElement.scrollTop > 300){

    nav.setAttribute("class", "ge")
  }

  if (document.documentElement.scrollTop < 300) {
    nav.setAttribute("class" , "hide")

  }
}