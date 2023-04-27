// takes in rgb pixels and returns the channel which has maximum range (length of color distribution)
function biggestColorRange(rgbVals) {
  let rMin = Number.MAX_VALUE,
    gMin = Number.MAX_VALUE,
    bMin = Number.MAX_VALUE;
  let rMax = Number.MIN_VALUE,
    gMax = Number.MIN_VALUE,
    bMax = Number.MIN_VALUE;

  rgbVals.forEach((pixel) => {
    rMin = Math.min(pixel.r, rMin);
    gMin = Math.min(pixel.g, gMin);
    bMin = Math.min(pixel.b, bMin);

    rMax = Math.max(pixel.r, rMax);
    gMax = Math.max(pixel.g, gMax);
    bMax = Math.max(pixel.b, bMax);
  });

  const rRange = rMax - rMin;
  const gRange = gMax - gMin;
  const bRange = bMax - bMin;

  const maxRange = Math.max(rRange, gRange, bRange);

  if (maxRange === rRange) return "r";
  else if (maxRange === gRange) return "g";
  else return "b";
}

export function medianCut(rgbVals, depth) {
  const MAX_DEPTH = 3;

  if (depth === MAX_DEPTH || rgbVals.length === 0) {
    const color = rgbVals.reduce(
      (prev, curr) => {
        prev.r += curr.r;
        prev.g += curr.g;
        prev.b += curr.b;
        return prev;
      },
      {
        r: 0,
        g: 0,
        b: 0,
      }
    );

    color.r = Math.round(color.r / rgbVals.length);
    color.b = Math.round(color.b / rgbVals.length);
    color.g = Math.round(color.g / rgbVals.length);

    return [color];
  }

  const maxRangeChannel = biggestColorRange(rgbVals);
  rgbVals.sort((a, b) => a[maxRangeChannel] - b[maxRangeChannel]);

  const mid = rgbVals.length / 2;

  return [
    ...medianCut(rgbVals.slice(0, mid), depth + 1),
    ...medianCut(rgbVals.slice(mid + 1), depth + 1),
  ];
}

// builds rgb data array from canvas image data
export function buildRGB(data) {
  const rgbValues = [];
  for (let i = 0; i < data.length; i += 4) {
    const rgb = {
      r: data[i],
      g: data[i + 1],
      b: data[i + 2],
    };
    rgbValues.push(rgb);
  }
  return rgbValues;
}
