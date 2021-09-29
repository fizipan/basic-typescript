"use strict";
// Basis Types
let id = 5;
let company = 'Art By Code';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let myFriends = ["Maulana", "Faqih", 'Perdana'];
let arr = ['Hello', 17, true];
// Tuple
let person = [2, "Hafizh", false];
// Tuple array
let employee;
employee = [[12, 'Hafizh'], [13, 'Haikal'], [12, 'Ibnu']];
// Union
let roles;
roles = 'Admin';
// Enum
var Alert;
(function (Alert) {
    Alert["Danger"] = "Danger";
    Alert["Warning"] = "Warning";
    Alert["Success"] = "Success";
})(Alert || (Alert = {}));
let statuses = Alert.Success;
const object = {
    id: 1,
    name: 'Hafizh'
};
// Type Assertion
let cid = 1;
let customerId = cid;
customerId = 2;
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(1, 2));
function log(message) {
    console.log(message);
}
const computer = {
    name: 'Asus',
    type: 'Mahal',
    price: 40000
};
computer.name = "HP";
const add = (x, y) => x + y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `Hallo my is ${this.name}`;
    }
}
const person1 = new Person(1, 'Hafizh');
const person2 = new Person(2, 'Athar');
// console.log(person1.register())
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const employee1 = new Employee(3, "Jamrud", 'Programmer');
console.log(employee1.register());
