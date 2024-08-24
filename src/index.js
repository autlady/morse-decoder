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
    // разбиваю строку на массив 
    let array = Array.from(expr);
    const newArray = [];

    while (array.length > 0) {

        // делю массив на элементы по 10 символов 
        let part = array.splice(0, 10).join("");

        // если звездочки - то пробел, иначе убираю все нули впереди 
        if (part === "**********") {
            part = part.replaceAll("**********", " ");
        } else {
            part = parseInt(part).toString();
        }

        // делю на 10 и 11
        let part1 = part.match(/..?/g);
    
        let part2 = "";
        let value = "";

        for(let i = 0; i < part1.length; i++) {

            // заменяю 10 и 11 на точки и тире
            part1[i] = part1[i].replace('10', ".");
            part1[i] = part1[i].replace('11', "-");
            part2 = part1.join("");

            // заменяю точки и тире на пробелы и буквы

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