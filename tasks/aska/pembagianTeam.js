const readline = require("readline");

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function bagiTeam(angka) {
  if (angka % 2 === 0) {
    return "Team B (genap)";
  } else {
    return "Team A (ganjil)";
  }
}

rl.question("Masukkan angka pemain: ", (input) => {
  const angka = Number(input);

  console.log(bagiTeam(angka)); 

  rl.close();
});
