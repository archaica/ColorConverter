const hexToRgbComponent = (hex) => {
  return parseInt(hex, 16);
}

const hexToAlphaComponent = (hex) => {
  return parseFloat((parseInt(hex, 16) / 255).toFixed(2));
}
 
const hexToRgba = (hex, isARGB = false) => {
  if (hex.startsWith('#')) {
      hex = hex.substring(1);
  }
  if (hex.startsWith('0x')) {
      hex = hex.substring(2);
  }
  let parts, a;
  switch (hex.length) {
      case 3:
          parts = hex.match(/.{1}/g);
          parts = parts.map(p => p + '0');
          a = 'ff';
          break;
      case 4:
          parts = hex.match(/.{1}/g);
          parts = parts.map(p => p + '0');
          if (isARGB) {
              a = parts.shift();
          } else {
              a = parts.pop();
          }
          break;
      case 6:
          parts = hex.match(/.{1,2}/g);
          a = 'ff'
          break;
      case 8: 
          parts = hex.match(/.{1,2}/g);
          if (isARGB) {
              a = parts.shift();
          } else {
              a = parts.pop();
          }
          break;
      default: {}
  }
  parts = parts.map(p => hexToRgbComponent(p));
  parts.push(hexToAlphaComponent(a));
  return parts.join(',');
}

const rgbComponentToHex = (component) => {
  var hex = component.toString(16)
  return hex.length == 1 ? "0" + hex : hex;
}

const alphaToHex = (alphaPercentage) => {
  var hex = Math.floor((alphaPercentage * 255)).toString(16)
  return hex.length == 1 ? "0" + hex : hex;
}

const rgbaToHex = (rgbString, isARGB = false) => {
  let parts = rgbString.split(',');
  let r = parts[0]
  let g = parts[1]
  let b = parts[2]
  let a = parts[3] ? parts[3] : 1;
  const rgbToHex = (r,g,b) => {
      return [r,g,b].map(c => rgbComponentToHex(parseInt(c))).join('');
  }
  if (isARGB) {
      return '#' + alphaToHex(a) + rgbToHex(r,g,b);
  } else {
      return '#' + rgbToHex(r,g,b) + alphaToHex(a);
  }
}

module.exports = {
 hexToRgba,
 rgbaToHex
}