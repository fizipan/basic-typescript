// NOTES: ------------------------------------------------------------ //
// We can add a type to each of the parameters and then
// to the function itself to add a return type.

const addOperator = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c);
};

// Error: because parameter must be a => number, b => number, c number or sting
// addOperator('plus', 'minus', false);

// Success: suitable parameters
addOperator(5, 10, '20');
