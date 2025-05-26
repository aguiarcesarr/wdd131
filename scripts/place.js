
const temperature = 45; // °F
const windSpeed = 10;   // mph

function calculateWindChill(tempF, speedMph) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speedMph, 0.16) +
    0.4275 * tempF * Math.pow(speedMph, 0.16)
  ).toFixed(1);
}

let windChillText = "N/A";
if (temperature <= 50 && windSpeed > 3) {
  windChillText = `${calculateWindChill(temperature, windSpeed)} °F`;
}

document.addEventListener("DOMContentLoaded", () => {
  const chillSpan = document.getElementById("chill");
  if (chillSpan) {
    chillSpan.textContent = windChillText;
  }
});