const hexToRgb = (hex) => {
  const res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  const r = parseInt(res[1], 16)
  const g = parseInt(res[2], 16)
  const b = parseInt(res[3], 16)
  return res ? `rgb(${r},${g},${b})` : null
}
module.exports.hexToRgb = hexToRgb

const isValidColor = (color) => {
  if (typeof color !== 'string') {
    throw new TypeError(
      `Wrong parameter type: String / typeof color = ${typeof color}`
    )
  }
  color = color.toLowerCase().replace(/\s/g, '') // normalize
  // Create test elements and assign styles
  const s = document.createElement('div').style
  s.color = color
  const computed = s.color.replace(/\s/g, '') // normalize
  // First compare with "rgba()". If color is Hex, change to rgb and compare
  return computed === color || computed === hexToRgb(color)
}
module.exports.isValidColor = isValidColor
