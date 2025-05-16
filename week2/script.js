// Variables for Input, Button and List elements
const input = document.querySelector('favchap');
const addButton = document.querySelector('#addButton');
const list = document.querySelector('#list');
// This will eventually be inside a function

let li = document.createElement('li');
let deleteButton = document.createElement('button'); 
li.textContent = input.value; 
deleteButton.textContent = '❌';
deleteButton.setAttribute('aria-label', `Remove ${input.value}`); 

li.appendChild(deleteButton); 
list.appendChild(li);
