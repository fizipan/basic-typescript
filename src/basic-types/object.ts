// NOTES: ------------------------------------------------------------ //
// in TypeScript to type object on data, we have to define type "object"

// Example 1
let user1: object;

user1 = {
  name: 'Haris',
  age: 17,
  isActive: true,
};

console.log(user1);

// Example 2 (Each property define type in object)
let user2: {
  name: string;
  age: number;
  isActive: boolean;
};

// Error
// user2 = {
//   name: 20, // Error: Type 'number' is not assignable to type 'string'
//   age: 'Haris', // Error: Type 'string' is not assignable to type 'number'
//   isActive: 'false', // Error: Type 'string' is not assignable to type 'boolean'
// };

// Success
user2 = {
  name: 'Haris',
  age: 17,
  isActive: false,
};

console.log(user2);
