"use strict";
// NOTES: ------------------------------------------------------------ //
// in TypeScript we can reuse a type that has been defined by alias "type"
const logDetails = (id, product) => {
    console.log(`${product} has a id of ${id}`);
};
const regards = (user) => {
    console.log(`${user.name} say Hello`);
};
logDetails(2, 'Ihsan');
regards({ name: 'Fajar', id: 2 });
