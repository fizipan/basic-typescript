"use strict";
// NOTES: ------------------------------------------------------------ //
// in TypeScript we can make signature for function declaration
// Example 1
// Signature Function
let regard;
// Call signature
regard = (name, regard) => {
    console.log(`${name} say ${regard}`);
};
// Example 2
// Signature Function
let calc;
// Call signature
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
