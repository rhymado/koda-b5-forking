export function findTheCapitals(word) {
  return word.split("").reduce(function (result, c, i) {
    if (c.toUpperCase() === c) result.push(i);
    return result;
  }, []);
}
