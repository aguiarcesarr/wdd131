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
// Call the function to display a random character when the page loads
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
        event.preventDefault(); 

        currentCount++;
        
        submissionCountSpan.textContent = currentCount;
        
        localStorage.setItem("submissionCount", currentCount);

        alert("Thank you for your suggestion!");
        
        contactForm.reset();
    });
}

// --- Hamburger Menu Toggle ---
const hamburgerButton = document.querySelector(".hamburger-btn");
const mainNav = document.querySelector(".main-nav");

hamburgerButton.addEventListener("click", () => {
    mainNav.classList.toggle("active");
});