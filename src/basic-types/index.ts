// Basis Types
let id: number = 5
let company: string = 'Art By Code'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1,2,3,4,5]
let myFriends: string[] = ["Maulana", "Faqih", 'Perdana']
let arr: any[] = ['Hello', 17, true]

// Tuple
let person: [number, string, boolean] = [2, "Hafizh", false]

// Tuple array
let employee: [number, string][]
employee = [[12, 'Hafizh'], [13, 'Haikal'], [12, 'Ibnu']]

// Union
let roles: 'Admin' | 'User'
roles = 'Admin'

// Enum
enum Alert {
    Danger = 'Danger',
    Warning = "Warning",
    Success = "Success",
}

let statuses = Alert.Success

// Object
type User = {
    id: number,
    name: string,
}
const object: User = {
    id: 1,
    name: 'Hafizh'
}

// Type Assertion
let cid: any = 1
let customerId = cid as number

customerId = 2

function addNum(x: number, y: number): number {
    return x + y
}

// console.log(addNum(1, 2));

function log(message: 'Hai' | 'Helo'): void {
    console.log(message);
}

// log('Hai')

// Interfaces
interface Laptop {
    name: string,
    type?: 'Murah' | 'Mahal',
    readonly price: number,
}

const computer: Laptop = {
    name: 'Asus',
    type: 'Mahal',
    price: 40000
}

computer.name = "HP"

// Interface function
interface MathFunc {
    (x: number, y:number): number
}

const add: MathFunc = (x:number, y:number): number => x + y


// classes
interface PersonInterface {
    id: number,
    name: string,
    register(): string
}

class Person implements PersonInterface {
    public id: number
    public name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `Hallo my is ${this.name}`
    }
}

const person1 = new Person(1, 'Hafizh')
const person2 = new Person(2, 'Athar')

// console.log(person1.register())

class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)

        this.position = position
    }
}

const employee1 = new Employee(3, "Jamrud", 'Programmer')

console.log(employee1.register());






