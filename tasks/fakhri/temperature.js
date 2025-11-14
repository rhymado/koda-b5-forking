export function celciusToFahrenheit(tempInCelcius) {
  console.log("\n---- Convert °C to °F Program ----");
  if (typeof tempInCelcius != "number") {
    throw new Error("temperature must be a number");
  }
  const formula = (celcius) => (celcius * 9) / 5 + 32;
  return {
    celcius: tempInCelcius,
    fahrenheit: formula(tempInCelcius),
  };
}
