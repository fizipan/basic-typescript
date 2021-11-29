// NOTES: ------------------------------------------------------------ //
// in TypeScript we can make signature for function declaration

// Example 1

// Signature Function
let regard: (a: string, b: string) => void;

// Call signature
regard = (name: string, regard: string) => {
  console.log(`${name} say ${regard}`);
};

// Example 2

// Signature Function
let calc: (a: number, b: number, c: string) => number;

// Call signature
calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};
