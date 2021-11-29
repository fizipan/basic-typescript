// NOTES: ------------------------------------------------------------ //
// in TypeScript to type number on data, we have to define type "number"

// Type number -------------------------------------------------- //
let attackSpeed: number = 100;

// Error: Type 'string' is not assignable to type "number"
// attackSpeed = 'Gord';

// Success: because is asign "number"
attackSpeed = 60;

console.log(attackSpeed);
