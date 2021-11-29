// NOTES: ------------------------------------------------------------ //
// As with other JavaScript language features, TypeScript adds type annotations and other
// syntax to allow you to express relationships between classes and other types.

// Acces modifier
// 1. public =>  A public can be accessed anywhere
// 2. protected => protected are only visible to subclasses of the class
// 3. private => doesn’t allow access to the parent even from subclasses:
// 4. readonly => This prevents assignments to the field outside of the constructor.

class Character {
  readonly name: string;
  protected skill: number;
  protected ultimateIsActive: boolean;
  sayHello() {
    return `${this.name} have ${this.skill} skill and ultimate is ${
      this.ultimateIsActive ? 'active' : 'not active'
    }`;
  }

  constructor(
    heroName: string,
    amountSkill: number,
    ultimateActiveValue: boolean
  ) {
    this.name = heroName;
    this.skill = amountSkill;
    this.ultimateIsActive = ultimateActiveValue;
  }
}

let character1 = new Character('Zilong', 3, true);
let character2 = new Character('Grock', 3, false);

console.log(character1.sayHello());
console.log(character2);
