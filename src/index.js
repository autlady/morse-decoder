const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let array = Array.from(expr);
    console.log(array);
    let newArray = [];
    let newSymbol = "";
    for (let index = 0; index < array.length; ++index) {
        if (array[index] === " ") {
            newArray = newArray.concat("**********");
        } else {
            symbol = Object.keys(MORSE_TABLE).find(key =>
                MORSE_TABLE[key] === array[index]);

            newSymbol = symbol.replaceAll("-", "11");
            newSymbol =  newSymbol.replaceAll(".", "10");
            newSymbol = newSymbol.padStart(10, "0");

            newArray = newArray.concat(newSymbol);
        } 
    }
    return newArray.join("");
}

module.exports = {
    decode
}