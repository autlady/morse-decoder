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
    const newArray = [];
    while (array.length > 0) {
        let part = array.splice(0, 10).join("");
 
        for (let i = 0; i < part.length; i++) {
            part = part.substring(i);
            if (part[i] === "1" || part[i] === "*") 
            break
        }
        part = part.replaceAll("**********", " ");
        let part1 = part.match(/..?/g);
        let part2 = "";
        let value = "";
        for(let i = 0; i < part1.length; i++) {
            part1[i] = part1[i].replace('10', ".");
            part1[i] = part1[i].replace('11', "-");
            part2 = part1.join("");

            if (part2 === " ") {
                value = " "
            } else {
                value = MORSE_TABLE[part2];
            } 
        }
        newArray.push(value);
    }
    return newArray.join("");
}

module.exports = {
    decode
}