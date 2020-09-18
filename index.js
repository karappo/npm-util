const jsdom = require("jsdom");
const document = new jsdom.JSDOM().window.document;

const hexToRgb = (hex) => {
  const res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return res ? `rgb(${parseInt(res[1], 16)},${parseInt(res[2], 16)},${parseInt(res[3], 16)})` : null
}
module.exports.hexToRgb = hexToRgb

const isValidColor = (color) => {
  if (typeof color !== 'string') throw new Error(`Wrong parameter type: String / typeof color = ${typeof color}`)
  color = color.toLowerCase().replace(/\s/g, '') // normalize
  // Create test elements and assign styles
  const s = document.createElement('div').style
  s.color = color
  const computed = s.color.replace(/\s/g, '') // normalize
  // First compare with "rgba()". If color is Hex, change to rgb and compare
  return  computed == color || computed == hexToRgb(color)
}
module.exports.isValidColor = isValidColor
