
const slopeIntercept = (min_size, max_size) => {
  equation = [];
  a = min_size;
  x = min_size;
  b = min_size;
  y = min_size;

  c = a * x + b * y;
  while (a <= max_size) {
    while (x < max_size) {
      while (b < max_size) {
        while (y < max_size) {
          c = a * x + b * y;
          if (c % 1 === 0 && c <= max_size && c >= min_size) {
            if (b < 0) {
              oppob = Math.abs(b);
            } else {
              oppob = -Math.abs(b);
            }
            if (c < 0) {
              abs_c = Math.abs(c);
              equation.push([
                `${a}(x) = ${oppob}(${y}) - ${abs_c}`,
                'x = ' + x
              ]);
            } else {
              equation.push([`${a}(x) = ${oppob}(${y}) + ${c}`, 'x = ' + x]);
            }
          }
          y++;
        }
        y = min_size;
        b++;
      }
      y = min_size;
      b = min_size;
      x++;
    }
    y = min_size;
    b = min_size;
    x = min_size;
    a++;
  }

  console.log(equation);
};

slopeIntercept(1, 10);
