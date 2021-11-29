// NOTES: ------------------------------------------------------------ //
// TypeScript can find out the return type by
// defining the return type of its function

const minus = (a: number, b: number): number => {
  // Error: return function must be number
  //   console.log(a + b);

  //   Success
  return a + b;
};

console.log(minus(10, 6));
