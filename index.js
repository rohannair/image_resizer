module.exports = function(MAX_WIDTH, MAX_HEIGHT, src) {
  var img = new Image()
  img.src = src

  var canvas = document.createElement('canvas')
  var canvasCtx = canvas.getContext('2d')
  canvasCtx.drawImage(img, 0, 0)

  var width = img.width
  var height = img.height

  if (width > height) {
    if (width > MAX_WIDTH) {
      height *= MAX_WIDTH / width
      width = MAX_WIDTH
    }
  } else {
    if (height > MAX_HEIGHT) {
      width *= MAX_HEIGHT / height
      height = MAX_HEIGHT
    }
  }

  canvas.width = width
  canvas.height = height

  canvasCtx = canvas.getContext('2d')
  canvasCtx.drawImage(img, 0, 0, width, height)

  return canvas.toDataURL('image/jpeg', 0.7)
}
