"use strict";
// NOTES: ------------------------------------------------------------ //
// in TypeScript Array types can be written in one of two ways. In the first section,
// you use an element type followed by [] to denote an array of that element type:
// Type array -------------------------------------------------- //
let listHero = ['Minotaur', 'Johnson', 'Grock'];
// Error: Type 'number' is not assignable to type string
// listHero = [20, 30, 40]
// Error: Type 'number' is not assignable to type string
// listHero.push(40);
// Success: because asign string in array
listHero = ['Angela', 'Nana', 'Rafaela'];
// Success: because is push "string" to array
listHero.push('Kaja');
console.log(listHero);
