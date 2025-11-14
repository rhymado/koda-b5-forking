export function squareRoot(inputAkar) {
  let x = inputAkar;
  for (let i = 0; i < 10; i++) {
    x = 0.5 * (x + inputAkar / x);
  }
  return x;
}

// squareRoot(25);
