const products = [
  { id: "fc-1888", name: "Flux Capacitor" },
  { id: "fc-2050", name: "Power Laces" },
  { id: "fs-1987", name: "Hoverboard" },
  { id: "ac-2000", name: "Arc Reactor" },
  { id: "rr-2020", name: "Rocket Boots" }
];

const selectElement = document.querySelector("#productName");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.name; // Or use product.id if required
  option.textContent = product.name;
  selectElement.appendChild(option);
});
