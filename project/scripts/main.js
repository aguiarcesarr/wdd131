// --- Featured Character Logic ---
const featuredCharacters = [
    {
        name: "Jace Herondale",
        description: "A skilled Shadowhunter, known for his sharp wit and complex family history. He is one of the best fighters of his generation.",
        imageUrl: "images/jace-herondale.jpg"
    },
    {
        name: "Magnus Bane",
        description: "The High Warlock of Brooklyn, Magnus is an ancient, powerful, and flamboyant warlock whose life is intertwined with Shadowhunter history.",
        imageUrl: "images/magnus-bane.jpg"
    },
    {
        name: "Clary Fray",
        description: "A young artist who discovers she is a Shadowhunter with a unique ability to create new runes. Her arrival throws the Shadow World into turmoil.",
        imageUrl: "images/clary-fray.jpg"
    }
];

// Function to display a random character
function displayRandomCharacter() {
    // Select a random character from the array
    const randomIndex = Math.floor(Math.random() * featuredCharacters.length);
    const character = featuredCharacters[randomIndex];

    // Select the DOM elements to update
    const charImg = document.querySelector("#char-img");
    const charName = document.querySelector("#char-name");
    const charDesc = document.querySelector("#char-desc");

    // Update the DOM with the character's information
    charImg.src = character.imageUrl;
    charImg.alt = `Image of ${character.name}`;
    charName.textContent = character.name;
    charDesc.textContent = character.description;
}

// Run the function when the page loads
// We wrap it in a 'DOMContentLoaded' event to make sure all HTML is loaded first
document.addEventListener('DOMContentLoaded', displayRandomCharacter);

// --- Contact Form Submission Counter ---

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    const submissionCountSpan = document.querySelector("#submission-count");

    // Get the current count from localStorage, or default to 0 if it doesn't exist
    let currentCount = localStorage.getItem("submissionCount") || 0;

    // Display the current count on the page
    submissionCountSpan.textContent = currentCount;

    // Listen for the form submission
    contactForm.addEventListener("submit", (event) => {
        // Prevent the form from actually submitting and reloading the page
        event.preventDefault(); 

        // Increment the counter
        currentCount++;
        
        // Update the display on the page
        submissionCountSpan.textContent = currentCount;
        
        // Save the new count back to localStorage
        localStorage.setItem("submissionCount", currentCount);

        // Optional: Give the user feedback
        alert("Thank you for your suggestion!");
        
        // Optional: Reset the form fields after submission
        contactForm.reset();
    });
}