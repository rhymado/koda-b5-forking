/**
 * Task Fakhri
 */

import fakhri from "./tasks/fakhri/index.js";

// Use IIFE here
(function taskFakhri() {
  // Convert Celcius to Fahrenheit
  // Success
  try {
    const fahrenheit = fakhri.celciusToFahrenheit(10);
    console.log(fahrenheit);
  } catch (error) {
    console.log(error.message);
  }
  // Failed
  try {
    const fahrenheit = fakhri.celciusToFahrenheit("10", 30);
    console.log(fahrenheit);
  } catch (error) {
    console.log(error.message);
  }
  // Counting Changes Nominal
  // Success
  try {
    const changes = fakhri.cashier(250_000, 375_000);
    console.log(changes);
  } catch (error) {
    console.log(error.message);
  }
  // Failed
  try {
    const changes = fakhri.cashier("250_000", "375_000");
    console.log(changes);
  } catch (error) {
    console.log(error.message);
  }
})();

/**
 * Task "Nugraha Panca Wibisana"
 */

// import your tasks here and run
import wibi from "./tasks/wibi/index.js";

(function taskWibi() {
  try {
    const changes = wibi.sumAllArray(1, 2, 3, 4, "5", [1, 2, 3]);
    console.log(changes);
  } catch (error) {
    console.log(error.message);
  }
})();
