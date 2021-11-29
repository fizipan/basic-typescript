// NOTES: ------------------------------------------------------------ //
// in TypeScript we can reuse a type that has been defined by alias "type"

type StringOrNum = string | number;

type objWithName = { name: string; id: StringOrNum };

const logDetails = (id: StringOrNum, product: string) => {
  console.log(`${product} has a id of ${id}`);
};

const regards = (user: objWithName) => {
  console.log(`${user.name} say Hello`);
};

logDetails(2, 'Ihsan');
regards({ name: 'Fajar', id: 2 });
