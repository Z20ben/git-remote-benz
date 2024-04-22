const prompt = require('prompt-sync')({ sigint: true });
// input data fits number 
const num1 = prompt('Enter a first number: ');
// input data second number 
const num2 = prompt('Enter a second number: ');

// print informasi
console.log('first number + second number =');

// perhitngan penjumlahan 
// convert ke number/int/float unruk melakukan penjumlahan angka
console.log(Number(num1) + Number(num2));
