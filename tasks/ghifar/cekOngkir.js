import { createInterface } from "node:readline/promises";
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});
export async function cekOngkir() {
  try {
    const kendaraan = await rl.question("mau naik apa ? (A: mobil B: motor) ");
    let inputKendaraan = kendaraan.toLowerCase();
    if (inputKendaraan !== "a" && inputKendaraan !== "b") {
      throw new Error("*input tidak sesuai");
    }
    const inputjarak = await rl.question("berapa kilometer(km) ? ");
    let jarak = parseInt(inputjarak);
    switch (inputKendaraan) {
      case "a":
        let mobil = jarak * 5e3;
        console.log(`ongkir mobil: Rp.${mobil}`);
        rl.close();
        break;
      case "b":
        let motor = jarak * 3e3;
        console.log(`ongkir motor: Rp.${motor}`);
        rl.close();
        break;
    }
  } catch (error) {
    console.log(error);
  } finally {
    rl.close();
  }
}


// const answer = await rl.question('What is your favorite food? ');
// console.log(`Oh, so your favorite food is ${answer}`);
