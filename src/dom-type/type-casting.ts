// NOTES: ------------------------------------------------------------ //
// in TypeScript to type DOM on data

// Element / children
const form = document.querySelector('form') as HTMLFormElement;
console.log(form.children);

// Input
const select = document.querySelector('select') as HTMLSelectElement;
const input = document.querySelector('input') as HTMLInputElement;

// Event listener
form.addEventListener('click', (e: Event) => {
  e.preventDefault();
});
