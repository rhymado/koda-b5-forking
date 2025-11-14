export function trianggel(n) {

  for (let i = 1; i <= n; i++) {
    let output = "";
    for (let j = i; j <= n; j++) {
      output += " ";
    }
    for (let k = 1; k <= i; k++) {
      output += "* ";
    }
    console.log(output);
  }
}
