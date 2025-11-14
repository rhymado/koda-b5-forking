/**
 * Task Fakhri
 */

import fakhri from './tasks/fakhri/index.js';
import adit from './tasks/adit/index.js';

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
    const fahrenheit = fakhri.celciusToFahrenheit('10', 30);
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
    const changes = fakhri.cashier('250_000', '375_000');
    console.log(changes);
  } catch (error) {
    console.log(error.message);
  }
})();

/**
 * Task "adit"
 */

// import your tasks here and run

(function taksAdit() {
  // square-root
  try {
    const akar = adit.squareRoot(25);
    console.log(akar);
  } catch (error) {
    console.log(error.message);
  }
  // Failed
  try {
    const akarSalah = adit.celciusToFahrenheit('25');
    console.log(akarSalah);
  } catch (error) {
    console.log(error.message);
  }
})();
