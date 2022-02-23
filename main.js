function isLeap(){
    let userInput = document.getElementById("year");
    let lengthDigit = userInput.value.length;

    if(lengthDigit == 4){
        let year = parseInt(userInput.value);
        let output = document.getElementById("output");

        if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
            output.innerHTML = year + ' is a leap year.';
        }
        else{
            output.innerHTML = year + ' is not a leap year.';
        }
    }
    else{
        output.innerHTML ='Invalid year.';
    }
    
}
