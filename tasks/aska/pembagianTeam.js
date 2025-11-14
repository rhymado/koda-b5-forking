import { createInterface } from "node:readline/promises";

export async function bagiTeam() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const input = await rl.question("Masukkan angka pemain: ");
  const angka = Number(input);

  if (angka % 2 === 0) {
    console.log("Team B (genap)");
  } else {
    console.log("Team A (ganjil)");
  }

  rl.close();
}

