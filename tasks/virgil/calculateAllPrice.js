const fruits = [
  { name: "apel", price: 5000 },
  { name: "pisang", price: 3000 },
  { name: "jeruk", price: 4000 },
];

export const calcTotal = (items) => {
  let total = 0;

  // loop daftar belanja
  for (let i = 0; i < items.length; i++) {
    const itemName = items[i];

    // cari harganya manual tanpa method
    for (let j = 0; j < fruits.length; j++) {
      if (fruits[j].name === itemName) {
        total = total + fruits[j].price;
      }
    }
  }

  return total;
};
