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
 * Task "Muhammad Ghifar Ramdhani"
 */

import ghifar from "./tasks/ghifar/index.js";

(async function taskGhifar() {
  try {
    const cekOngkir = await ghifar.cekOngkir();
    console.log(cekOngkir);
  } catch (error) {
    console.log(error.message);
  }
})();


