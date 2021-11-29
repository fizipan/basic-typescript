// NOTES: ------------------------------------------------------------ //
// In some situations, not all types of information are available or their declaration
// will require a data type. In this case, we may want to opt out of type checking.
// To do so, we label these values ​​of "any" type

// Type any -------------------------------------------------- //
let other: any = 'anything';

// Success: because in type any we can asign (string, number, boolean, etc)
other = false;
other = '123';
other = 123;

console.log(other);
