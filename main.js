function isLeap(year){
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        console.log('This is a leap year.')
    }
    else{
        console.log('This is not a leap year.')
    }
}

let myYear = 1700;
let result = isLeap(myYear);