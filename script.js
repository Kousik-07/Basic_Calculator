let string = "";
let display = document.querySelector("input");
let buttens = document.querySelectorAll('button');
let backbtn = document.querySelector("#del");
Array.from(buttens).forEach((butten) => {
    butten.addEventListener("click", (e) => {
       if (e.target.innerHTML=='=') {
           string = eval(string);
           display.value = string;
       }
       else if (e.target.innerHTML=='AC') {
           string = "";
           display.value = string;
       }
       else if (e.target.innerHTML=='X') {
           string = string+'*';
          display.value = string;
       }
       
       else {
        // console.log(e.target);
        string = string + e.target.innerHTML;
        display.value = string;
       }
   }); 
})

backbtn.addEventListener("click", (e) => {
   string=string.substring(0,string.length-1)
    display.value = string;

})


