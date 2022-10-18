// Write your code below this line

function decode(string) {
    const abc = 'abcdefghijklmnopqrstuvwxyz'

    //Get number at start of string
    let shiftNum = parseInt(string)

    //Remove non-letters from string
    string = string.replace(/[^a-zA-Z]/g, '')

    //If number is negative get the inverse
    if (shiftNum < 0) {
        shiftNum = 26 + shiftNum
    }

    //Add each shifted letter to the output using modulo to handle looping to start
    let output = ''
    for (let i = 0; i < string.length; i++) {
        output += abc[(abc.indexOf(string[i]) + shiftNum) % 26]
    }
    return output
}

console.log(decode('1a'))
console.log(decode('3ce'))
console.log(decode('2fcjjm'))
console.log(decode('13cresrpgvba'))
console.log(decode('-5fhmnjaji'))