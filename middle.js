const chicken = (req, res, next) => {
  console.log('chicken')
  next()
}

module.exports = {chicken}