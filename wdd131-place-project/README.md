# wdd131 Place Project

## Overview
This project is designed as a web application that showcases a specific place, incorporating responsive design principles and interactive elements. The application includes a hero section with images that adapt to different screen sizes, a weather section that calculates and displays the windchill factor, and a clean, user-friendly layout.

## Project Structure
The project is organized into the following files and directories:

- **index.html**: The main entry point for the project, containing the standard HTML document structure and linking to the necessary CSS and JavaScript files.
  
- **place.html**: Contains specific content and layout for the page, following the provided wireframe and design requirements. It links to the CSS file(s) and the JavaScript file with the defer attribute.

- **scripts/**: This directory contains JavaScript files.
  - **place.js**: Contains the logic for calculating and displaying the windchill factor in the "Weather" section. It includes a function named `calculateWindChill` that computes the windchill based on static temperature and wind speed values, and handles the conditions for displaying "N/A" when applicable.

- **styles/**: This directory contains CSS files.
  - **place.css**: Contains styles for the project, including global CSS variables, media queries, and styling for layout components. It ensures good design principles are followed, such as alignment, color contrast, and usability.

- **images/**: This directory contains image files used in the project.
  - **hero-large.webp**: Used for the hero section of the page in large view.
  - **hero-medium.webp**: Used for the hero section of the page in medium view.
  - **hero-small.webp**: Used for the hero section of the page in small view.
  - **weather.svg**: Used as the weather icon in the mobile view.

## Setup Instructions
1. Clone the repository to your local machine.
2. Open the project folder in your preferred code editor.
3. Use a local server to view the project in your web browser (e.g., Live Server extension in VS Code).
4. Ensure all assets are correctly linked in the HTML files.

## Usage
- Open `index.html` or `place.html` in a web browser to view the project.
- The weather section will display the windchill factor based on predefined static values for temperature and wind speed.

## License
This project is for educational purposes and follows the guidelines provided in the course. All images used are either created by the author or sourced from free stock photo websites, adhering to their licensing requirements.