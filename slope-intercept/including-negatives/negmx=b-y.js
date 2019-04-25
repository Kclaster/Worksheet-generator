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
          let max = Math.max(y, m, b, x, y);
          let min = Math.min(y, m, b, x, y);
          if (m > 0 && y >= 0) {
            equation.push([
              '1',
              m,
              b,
              y,
              `-${m}(x) = ${b} - ${y}`,
              'x = ' + x,
              max,
              min
            ]);
          } else if (m <= 0 && y >= 0) {
            abs_m = Math.abs(m);
            equation.push([
              '2',
              m,
              b,
              y,
              `${abs_m}(x) = ${b} - ${y}`,
              'x = ' + x
            ]);
          } else if (m > 0 && y < 0) {
            abs_y = Math.abs(y);
            equation.push([
              '3',
              m,
              b,
              y,
              `-${m}(x) = ${b} + ${abs_y}`,
              'x = ' + x,
              max,
              min
            ]);
          } else {
            abs_m = Math.abs(m);
            abs_y = Math.abs(y);
            equation.push([
              '4',
              m,
              b,
              y,
              `${abs_m}(x) = ${b} + ${abs_y}`,
              'x = ' + x
            ]);
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
  return equation;
};

slopeIntercept(-10, 10);

module.exports = slopeIntercept(-50, 50);
