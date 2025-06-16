// Array of character objects
const characters = [
    {
        id: 'clary',
        name: 'Clary Fray',
        type: 'Shadowhunter',
        description: 'A fiery, red-headed artist who discovers her true lineage as a Nephilim. Possesses the rare ability to create new runes.',
        imageUrl: 'images/clary-fray.jpg'
    },
    {
        id: 'jace',
        name: 'Jace Herondale',
        type: 'Shadowhunter',
        description: 'Known for his exceptional fighting skills and sharp wit. He is considered one of the best Shadowhunters of his generation.',
        imageUrl: 'images/jace-herondale.jpg'
    },
    {
        id: 'alec',
        name: 'Alec Lightwood',
        type: 'Shadowhunter',
        description: 'The responsible and archer-extraordinaire head of the New York Institute. He is a compassionate leader and protector.',
        imageUrl: 'images/alec-lightwood.jpg'
    },
    {
        id: 'isabelle',
        name: 'Isabelle Lightwood',
        type: 'Shadowhunter',
        description: 'A formidable and fashionable warrior who wields an electrum whip. She is fiercely loyal and a brilliant forensic pathologist.',
        imageUrl: 'images/izzy-lightwood.jpg'
    },
    {
        id: 'magnus',
        name: 'Magnus Bane',
        type: 'Warlock',
        description: 'The ancient and powerful High Warlock of Brooklyn. Known for his wisdom, flamboyant style, and love for Alec Lightwood.',
        imageUrl: 'images/magnus-bane.jpg'
    },
    {
        id: 'simon',
        name: 'Simon Lewis',
        type: 'Vampire',
        description: 'Clary\'s loyal best friend who is turned into a Daylighter—a vampire who can walk in the sun. He is a musician and a hero in his own right.',
        imageUrl: 'images/simon-lewis.jpg'
    },
    {
        id: 'luke',
        name: 'Luke Garroway',
        type: 'Werewolf',
        description: 'A former Shadowhunter who is now the leader of the Manhattan werewolf pack. He acts as a father figure to Clary.',
        imageUrl: 'images/luke-garroway.jpg'
    },
    {
        id: 'maia',
        name: 'Maia Roberts',
        type: 'Werewolf',
        description: 'A strong-willed and resilient member of the Manhattan werewolf pack. She overcomes a traumatic past to become a leader.',
        imageUrl: 'images/maia-roberts.jpg'
    }
];

// Function to create and display character cards
function displayCharacters(characterArray) {
    const grid = document.querySelector("#character-grid");
    // Clear the grid before displaying new cards
    grid.innerHTML = ""; 

    characterArray.forEach(character => {
        // Create the article element for the card
        const card = document.createElement('article');
        card.classList.add('character-card');

        // Use a template literal to build the inner HTML of the card
        card.innerHTML = `
            <img src="${character.imageUrl}" alt="Image of ${character.name}" loading="lazy">
            <h3>${character.name}</h3>
            <p class="char-type">Type: ${character.type}</p>
            <p class="char-desc">${character.description}</p>
        `;
        
        // Append the new card to the grid
        grid.appendChild(card);
    });
}

// Initial display of all characters when the page loads
displayCharacters(characters);

// --- Filtering Logic ---

// Select all filter buttons
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Get the data-type from the clicked button
        const type = button.dataset.type;

        // Remove 'active' class from all buttons
        filterButtons.forEach(btn => btn.classList.remove("active"));
        // Add 'active' class to the clicked button
        button.classList.add("active");

        // Use conditional branching to filter
        if (type === 'all') {
            // If 'all' is clicked, display the original full array
            displayCharacters(characters);
        } else {
            // Otherwise, filter the array
            const filteredCharacters = characters.filter(character => character.type === type);
            displayCharacters(filteredCharacters);
        }
    });
});