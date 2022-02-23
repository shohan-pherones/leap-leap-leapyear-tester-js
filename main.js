function isLeap(year){
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        userOutput.innerHTML = result.value + " is a leap year.";
    }
    else{
        userOutput.innerHTML = result.value + " is not a leap year.";
    }
}
let userInput = parseInt(document.getElementById("year"));
let userOutput = document.getElementById("output");

let result = isLeap(userInput);