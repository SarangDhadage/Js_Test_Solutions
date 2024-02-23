//Calculate the sum of numbers within an array

function cal(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}


const num = [11, 78, 45, 23, 45];
const sum = cal(num);
console.log("Sum:", sum); 