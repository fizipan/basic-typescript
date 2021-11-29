"use strict";
// NOTES: ------------------------------------------------------------ //
// in TypeScript to type DOM on data
// Element / children
const form = document.querySelector('form');
console.log(form.children);
// Input
const select = document.querySelector('select');
const input = document.querySelector('input');
// Event listener
form.addEventListener('click', (e) => {
    e.preventDefault();
});
