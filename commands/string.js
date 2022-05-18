module.exports = function(length){
    const upperCase ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowwerCase = 'abcdefghijklmnopqrstuvwxyz';
    const numeric = '0123456789';
    const specialChar = '!"#$%&()*+,-./:;<=>?@[]\^_`{}|~';

    const charSet = upperCase + lowwerCase + numeric + specialChar;

    let random = '';
    for ( let i = 0; i < length; i++ ) {
        random += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    console.log(random);
}