
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


async function typeSentence(sentence, eleRef, delay = 250) {
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return;
}


function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}





document.getElementById("test").addEventListener("scroll",typeSentence("Hi! I'm Geici!", "#sentence") );
