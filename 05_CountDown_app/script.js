

const endDate = "1 March 2024 10:00 AM";

const date = document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock(){

    const end = new Date(endDate);
    const curDate = new Date();
    const diff = (end - curDate) / 1000;
    
    if (diff < 0 ) {    // for avoding neagative value
        return;
    }
                                        
     // console.log(diff/ 3600 / 24);                 //convert milliseconds in second // converting value into days
     inputs[0].value = Math.floor(diff/ 3600/ 24);   //days calculated
     inputs[1].value = Math.floor((diff/3600)%24);   //hours calculated
     inputs[2].value = Math.floor((diff/ 60) % 60);  // min calculated
     inputs[3].value = Math.floor((diff) % 60);      // sec calculated
    // console.log(diff)
    // console.log(end);
    // console.log(now);
}

clock();    // initial fun call

//  for runing clock every second 

setInterval(() =>{ 
    clock()
 },1000
);
