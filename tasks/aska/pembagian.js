import { createInterface } from "node:readline/promises";

export async function pembagian() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const angka1 = await rl.question("Masukkan angka pertama: ");
  const angka2 = await rl.question("Masukkan angka kedua (pembagi): ");

  const a = Number(angka1);
  const b = Number(angka2);

  if (isNaN(a) || isNaN(b)) {
    console.log("Input harus berupa angka!");
    rl.close();
    return;
  }

  if (b === 0) {
    console.log(" Tidak bisa membagi dengan nol!");
    rl.close();
    return;
  }

  const hasil = a;
  console.log(`Hasil pembagian: ${hasil}`);

  rl.close();
}


