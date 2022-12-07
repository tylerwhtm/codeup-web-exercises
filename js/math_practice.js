//show Math.random()
console.log(Math.trunc(Math.random() * 6 + 1));

//show Math.random() to get number from 0 to 9

//add 1 to change it to number from 1 to 10

//lastly, add floor to "truncate"
//actually, see if truncate is a function

//Math.round()
console.log(Math.round(3.14159 * 1000) / 1000);

// show how to use for rounding floats to arbitrary precision

//Math.pow()
console.log(Math.pow(10,3));
console.log(10 ** 3);

//Math.sqrt()
console.log(Math.sqrt(3));

//Math.PI constant
console.log(Math.PI);

//write a cool function to round float to a given precision
//e.g., roundFloat(3.14159, 3) -> 3.142
function roundFloat(floatNum, decimalDigit) {
    //1. multiply floatNum by 10 to the power of decimalDigit
    floatNum = floatNum * (10 ** decimalDigit);
    //2. call Math.round on floatNum
    floatNum = Math.round(floatNum);
    //3. divide floatNum by 10 to the power of decimalDigit
    floatNum = floatNum / (10 ** decimalDigit);
    return floatNum;
}
console.log(roundFloat(3.14159,3))
