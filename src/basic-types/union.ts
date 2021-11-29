// NOTES: ------------------------------------------------------------ //
// Sometimes, you'll find libraries that expect more than one parameter
// to be a number or a string. For example "union"

// Type union -------------------------------------------------- //

// Exampple 1 :
let uuid: string | number;

//Error: Type 'boolean' is not assignable to type 'string | number'
// uuid = false

// Success: because is asign "string"
uuid = '123';

// Success: because is asign "number"
uuid = 123;

console.log(uuid);

// Example 2 :
let mixed: (string | number)[] = [];

// Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'
// mixed.push(false);

// Success: because is push "string" to array
mixed.push('hello');

// Success: because is push "number" to array
mixed.push(20);

console.log(mixed);
