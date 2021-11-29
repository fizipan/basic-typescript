// NOTES: ------------------------------------------------------------ //
// in TypeScript to type boolean on data, we have to define type "boolean"

// Type boolean -------------------------------------------------- //
let ultimateIsActive: boolean = true;

// Error: Type 'string' is not assignable to type "boolean"
// ultimateIsActive = 'yes';

// Success: because is asign "boolean"
ultimateIsActive = false;

console.log(ultimateIsActive);
