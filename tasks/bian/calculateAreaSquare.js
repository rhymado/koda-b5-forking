function squareArea(side) {
  if (typeof side !== "number") {
    throw new Error("Sisi Harus Berupa Angka");
  }
  return side * side;
}

export default squareArea;