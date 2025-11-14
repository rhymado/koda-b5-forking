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
 * Task "Person Hilmy"
 */

import hilmy from "./tasks/hilmy/index.js";
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

  try {
    const resultKali = hilmy.kali(4, 5);
    console.log(resultKali);
  } catch (error) {
    console.log(error.message);
  }

  try {
    const resultBagi = hilmy.bagi(20, 4);
    console.log(resultBagi);
  } catch (error) {
    console.log(error.message);
  }
})();

/**
 * Task "Ari Ramadhan"
 */

import ari from "./tasks/ari/index.js";

// Use IIFE here
(function taskAri() {
  // Convert roman to integer
  // Success
  try {
    const romanToInt = ari.romanToInteger();
    romanToInt;
  } catch (error) {
    console.log(error.message);
  }
  // Convert roman to integer
  // Success
  try {
    const checkPalindrom = ari.checkPalindrom();
    checkPalindrom;
  } catch (error) {
    console.log(error.message);
  }
})();

/**
 * Task "Virgil"
 */

import virgil from "./tasks/virgil/index.js";

(function taskVirgil() {
  try {
    const calculate = virgil.calcTotal(["apel", "pisang", "apel"]);
    console.log(calculate);
  } catch (error) {
    console.log(error.message);
  }
  try {
    const calculate = virgil.countLetters("virgil");
    console.log(calculate);
  } catch (error) {
    console.log(error.message);
  }
  try {
    const calculate = virgil.countLetters("virgil");
    console.log(calculate);
  } catch (error) {
    console.log(error.message);
  }
})();

// Task Bian
import bian from "./tasks/bian/index.js";

(function taskBian() {
  try {
    console.log(bian.minutesToHours(180), "Jam");
  } catch (error) {
    console.log(error.message);
  }
})();
/**
 * Task Ghifar
 */
import ghifar from "./tasks/ghifar/index.js";

(async function taskGhifar() {
  try {
    const cekOngkir = await ghifar.cekOngkir();
    console.log(cekOngkir);
  } catch (error) {
    console.log(error.message);
  }
  try {
    ghifar.triangle(5);
  } catch (error) {
    console.log(error.message);
  }
})();

/*
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

/*
 * Task "M. Fadhlul Rahman P"
 */

// import your tasks here and run
import rahman from "./tasks/rahman/src/index.js";

(async function taskRahman() {
  try {
    const convertRp = await rahman.convertRupiahToDollar(100000);
    console.log(convertRp);
  } catch (error) {
    console.log(error.message);
  }
  try {
    const convertRp = await rahman.convertDollarToRupiah(100);
    console.log(convertRp);
  } catch (error) {
    console.log(error.message);
  }
})();

/*
 * Task "Aska Diliyan Perkasa"
 */

// import your tasks here and run
import aska from "./tasks/aska/index.js";
(async function taskAska() {
  try {
    const pembagian = await aska.bagiTeam(12);
    console.log(pembagian);
  } catch (error) {
    console.log(error);
  }
})();