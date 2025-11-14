import { createInterface, Readline } from "node:readline/promises";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arrRoman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

async function romanToInteger() {
  try {
    const inputRoman = await rl.question(
      "Input roman number (I, V, X, L, C, D, M) : "
    );

    let result = 0;
    let angka;

    for (let a = 0; a < inputRoman.length; a++) {
      angka = arrRoman[inputRoman[a]];

      if (a == inputRoman.length - 1) {
        result += angka;
      } else if (angka >= arrRoman[inputRoman[a + 1]]) {
        result += angka;
      } else {
        result -= angka;
      }
    }

    result + inputRoman[inputRoman.length - 1];

    return console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    rl.close();
  }
}

romanToInteger();
