function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex.toString().toUpperCase() : hex.toString().toUpperCase();
}

export function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
