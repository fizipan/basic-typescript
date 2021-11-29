"use strict";
// NOTES: ------------------------------------------------------------ //
// in TypeScript to type string on data, we have to define type "string"
// Type string -------------------------------------------------- //
let hero = 'Karina';
// Error: Type 'number' is not assignable to type "string"
// hero = 60;
// Success: because is asign "string"
hero = 'Gord';
console.log(hero);
