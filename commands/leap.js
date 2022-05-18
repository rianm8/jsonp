module.exports = function(year){
    year = parseInt(year);
    if(isNaN(year)){
        return console.log("Please enter a correct year")
    }

    if(year % 4 != 0){
        console.log(year + " is a Common Year");
    }else if(year % 100 != 0){
        console.log(year + " is a Leap Year");
    }else if(year % 400 != 0){
        console.log(year + " is a Common Year");
    }else{
        console.log(year + " is a Leap Year");
    }
}