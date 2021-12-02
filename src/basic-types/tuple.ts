// NOTES: ------------------------------------------------------------ //
// Tuple types allow you to express an array with a fixed number of elements whose
// types are known, but need not be the same. For example, you may wantto
// represent a value as a pair of a string and a number

let tuple: [string, number, boolean] = ['Hayus', 22, true];
// Error : Type 'number' is not assignable to type 'string'
// tuple[0] = 22;

// Success
tuple[0] = 'Haris';
