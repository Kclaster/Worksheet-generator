//Done
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
            let max = Math.max(a, x, b, y, c);
            let min = Math.min(a, x, b, y, c);
            if (b < 0) {
              oppob = Math.abs(b);
            } else {
              oppob = -Math.abs(b);
            }
            if (b < 0) {
              abs_b = Math.abs(b);
              equation.push([
                `${c} = ${a}x - ${abs_b}(${y})`,
                'x = ' + x,
                max,
                min
              ]);
            } else {
              equation.push([
                `${c} = ${a}x + ${b}(${y})`,
                'x = ' + x,
                max,
                min
              ]);
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

  return equation;
};

module.exports = slopeIntercept(-50, 50);
