

// async function typeSentence(sentence, eleRef, delay = 100) {
//     const letters = sentence.split("");
//     let i = 0;
//     while(i < letters.length) {
//       await waitForMs(delay);
//       $(eleRef).append(letters[i]);
//       i++
//     }
//     return;
//   }
  
  
//   function waitForMs(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms))
//   }

//   typeSentence("Geciane Barham Web Developer!", "#sentence")

  
// async function deleteSentence(eleRef) {
//     const sentence = $(eleRef).html();
//     const letters = sentence.split("");
//     let i = 0;
//     while(letters.length > 0) {
//       await waitForMs(400);
//       letters.pop();
//       $(eleRef).html(letters.join(""));
//     }
//   }

//   $( document ).ready(async function() {
//     await typeSentence("", "#sentence");
//     await waitForMs(4000);
//     deleteSentence("#sentence");
//   });
  

//   async function typeSentence(sentence, eleRef, delay = 100) {
//     const letters = sentence.split("");
//     let i = 0;
//     while(i < letters.length) {
//       await waitForMs(delay);
//       $(eleRef).append(letters[i]);
//       i++
//     }
//     return;
//   }
  
  
//   function waitForMs(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms))
//   }

//   typeSentence("", "#sentence")


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 120) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}



// function animation () {
//  let anime= document.getElementById("anime")
//   console.log(anime)
// }
// animation();

