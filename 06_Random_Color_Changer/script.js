

function getColor (){

    const randomNumber  = Math.floor(Math.random() * 16777215);   // generating random number
    const randomCode = "#" + randomNumber.toString(16) ;            // converting num to hexa-num
    document.body.style.backgroundColor = randomCode;               // logic of bcg color changing 
    document.getElementById("randomCode").innerText = randomCode;   // showing code on display

    // console.log(randomNumber);
    // console.log(randomCode);
}

document.getElementById("btn").addEventListener("click", getColor);  // btn click event // event call


getColor();  // initial call
