import { createInterface } from "node:readline/promises";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

export async function checkPalindrom() {
  try {
    const inputWord = await rl.question(
      "Please input the words you want to check = "
    );

    let outBack = "";
    let result = "";

    for (let a = 0; a < inputWord.length; a++) {
      outBack = outBack + inputWord[inputWord.length - 1 - a].toLowerCase();
    }

    if (inputWord.toLowerCase() === outBack) {
      result = "Palindrom";
    } else {
      result = "Bukan Palindrom";
    }
    return console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    rl.close();
  }
}
