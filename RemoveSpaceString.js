//Write a code to Remove the spaces found in a string

function removeSpaces(input) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== ' ') {
            result += input[i];
        }
    }
    return result;
}


const stringWithSpaces = "Hello, world!";
const stringWithoutSpaces = removeSpaces(stringWithSpaces);
console.log(stringWithoutSpaces); 