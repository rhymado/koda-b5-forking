import { createInterface } from "node:readline/promises";
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});
export async function cekOngkir() {
  try {
    const kendaraan = await rl.question("mau naik apa ? (A: mobil B: motor) ");
    const inputKendaraan = kendaraan.toLowerCase();
    if (inputKendaraan !== "a" && inputKendaraan !== "b") {
      throw new Error("*input tidak sesuai");
    }
    const inputjarak = await rl.question("berapa kilometer(km) ? ");
    const jarak = parseInt(inputjarak);
    switch (inputKendaraan) {
      case "a":
        const mobil = jarak * 5e3;
        return `ongkir mobil: Rp.${mobil}`;
        break;
      case "b":
        const motor = jarak * 3e3;
        return`ongkir motor: Rp.${motor}`;
        break;
    }
  } catch (error) {
    return error;
  } finally {
    rl.close();
  }
}

// const answer = await rl.question('What is your favorite food? ');
// console.log(`Oh, so your favorite food is ${answer}`);
