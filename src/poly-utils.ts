export function boundingCenter(points: [[number, number]]): [number, number] {
  let x1 = Infinity;
  let y1 = Infinity;
  let x2 = -Infinity;
  let y2 = -Infinity;

  for (let i = 0; i < points.length; i++) {
    x1 = Math.min(x1, points[i][0]);
    y1 = Math.min(y1, points[i][1]);
    x2 = Math.max(x2, points[i][0]);
    y2 = Math.max(y2, points[i][1]);
  }

  return [x1 + (x2 - x1) /2, y1 + (y2 - y1) / 2];
}