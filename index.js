/**
 * Task Fakhri
 */

import fakhri from "./tasks/fakhri/index.js";
import hilmy from "./tasks/hilmy/index.js";

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
 * Task "Person Name"
 */
// Task hilmy
(function taskHilmy() {
  try {
    const resultJumlah = hilmy.jumlah(5, 10);
    console.log(resultJumlah);
  } catch (error) {
    console.log(error.message);
  }

  try {
    const resultKurang = hilmy.kurang(15, 5);
    console.log(resultKurang);
  } catch (error) {
    console.log(error.message);
  }
})(); 



// import your tasks here and run
