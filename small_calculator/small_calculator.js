

function calculator (num_1, operator, num_2) {
  switch (operator) {
    case "+":
      return num_1 + num_2;
    case "-":
      return num_1 - num_2;
    case "*":
      return num_1 * num_2;
    case "/":
      if ( num_2 === 0) return;
      return num_1 / num_2;

  }
}

const result = calculator(5, "/", 5);
console.log(result);