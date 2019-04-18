//Done
const slopeIntercept = (min_size, max_size) => {
  equation = [];

  for (a = min_size; a <= max_size; a++) {
    for (x = min_size; x <= max_size; x++) {
      for (b = min_size; b <= max_size; b++) {
        for (y = min_size; y <= max_size; y++) {
          
          c = a * x + b * y;

          if (c % 1 === 0 && c <= max_size && c >= min_size) {
            if (b < 0) {
              abs_b = Math.abs(b);
              equation.push([`${a}(x) - ${abs_b}(${y}) = ${c}`, "x = " + x]);
            } else {
              equation.push([`${a}(x) + ${b}(${y}) = ${c}`, "x = " + x]);
            }
          }
        //console log test - c = a * x + b * y
        //console.log("(c = a * x + b * y)", c, "=", a, "+", x, "*", b, "+", y);
        }

      }
    }
  }
  console.log(equation);
};
slopeIntercept(1, 10);
