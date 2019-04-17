//Done
const slopeIntercept = (min_size, max_size) => {
  equation = [];
  m = min_size;
  b = min_size;
  x = min_size;
  y = m * x + b;
  while (m <= max_size) {
    while (x <= max_size) {
      while (b <= max_size) {
        y = m * x + b;
        if (y % 1 === 0 && y <= max_size && y >= min_size) {
          if (b < 0) {
            abs_b = Math.abs(b);
            equation.push([`${y} = ${m}(x) - ${abs_b}`, 'x = ' + x]);
          } else {
            equation.push([`${y} = ${m}(x) + ${b}`, 'x = ' + x]);
          }
        }
        b++;
      }
      b = min_size;
      x++;
    }
    x = min_size;
    b = min_size;
    m++;
  }
  console.log(equation);
};

slopeIntercept(1, 10);
