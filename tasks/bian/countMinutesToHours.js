function minutesToHours(minutes) {
  if (typeof minutes !== "number") {
    throw new Error("Menit Harus Angka");
  }
  return minutes / 60;
}

export default {
  minutesToHours,
};
