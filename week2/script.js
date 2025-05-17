// Variables for Input, Button and List elements
const input = document.querySelector('#favchap');
const addButton = document.querySelector('#addButton');
const list = document.querySelector('#list');
// This will eventually be inside a function



// Add Chapter Button
addButton.addEventListener('click', function(){
    if (input.value.trim() !== '') {
        let li = document.createElement('li');
        let deleteButton = document.createElement('button'); 
        li.textContent = input.value; 
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', `Remove ${input.value}`); 

        // Add delete button functionality
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus(); // focus on the input field after removing
        });

        li.appendChild(deleteButton); 
        list.appendChild(li);

        input.value = ''; // clear the input field
        input.focus(); // focus on the input field after adding
    } else {
        input.focus(); // if input is empty, focus on the input field  
    }   
});
