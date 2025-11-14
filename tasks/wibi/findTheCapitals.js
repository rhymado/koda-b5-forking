/**
 * 
 * @param {string} word 
 * 
 * @description mencari index dari huruf yang capital dan mengembalikan sebuah array
 * 
 * @returns {array}
 */

export function findTheCapitals(word) {
  return word.split("").reduce(function (result, c, i) {
    if (c.toUpperCase() === c) result.push(i);
    return result;
  }, []);
}
