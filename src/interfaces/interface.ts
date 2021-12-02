// NOTES: ------------------------------------------------------------ //
// Like classes, interfaces can extend each other. This allows you to copy the
// members of one interface into another, which gives you more flexibility
// in how you separate your interfaces into reusable components.

interface isAnimal {
  name: string;
  age: number;
  sound(sound: string): void;
  speed(speed: number): number;
}

const Tiger: isAnimal = {
  name: 'Tiger',
  age: 4,
  sound(sound: string): void {
    console.log(sound);
  },
  speed(speed: number): number {
    return speed;
  },
  //   Error: Object literal may only specify known properties,
  //   and 'attack' does not exist in type 'isAnimal'.
  //   attack() {},
};

const greetAnimal = (animal: isAnimal) => {
  console.log('hello', animal);
};

greetAnimal(Tiger);
