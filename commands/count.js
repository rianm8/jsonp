module.exports = function(char, word, loop){
    let reg = new RegExp(char, "g");
    console.log((word.match(reg)||[]).length * loop);
}