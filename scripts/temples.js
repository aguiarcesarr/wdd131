const menuButton = document.getElementById("menu-button");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("show");

    if (menuButton.textContent === "☰") {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }
});