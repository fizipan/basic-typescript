// NOTES: ------------------------------------------------------------ //
// in TypeScript to type function on data, we have to define type "function"

let greet: Function;

// Error: Type 'string' is not assignable to type 'Function'
// greet = 'hello';

// Success: because is a function
greet = () => {
  console.log('hello world!');
};
