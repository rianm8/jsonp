module.exports = function(min, max) {
    min = parseInt(min);
    max = parseInt(max);

    if(isNaN(min) || isNaN(max)){
        return console.log("balik");
    }

    if(max >= min){
        console.log("Hasil : " + Math.floor(Math.random() * (max - min + 1) + min));
    }else{
        console.log("Maximum number must be greater then Minimum number");
    }
}