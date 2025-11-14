function minutesToHours(minutes) {
  if (typeof minutes !== "number") {
    throw new Error("Menit harus angka");
  }
  return minutes / 60;
}

export default minutesToHours;