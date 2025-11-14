/**
 *
 * @param  {...any} array
 *
 * @description jika isi di dalam array bukan sebuah number akan di convert langsung jadi number dan bernilai 0
 *
 * @returns {number}
 */

export function sumAllArray(...array) {
  const arr = [...array];

  return arr
    .flat(Infinity)
    .map((a) => (Number.isNaN(Number(a)) ? (a = 0) : a))
    .reduce((a, b) => a + b, 0);
}
