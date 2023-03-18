module.exports = (req, res, next) => {
    console.log()
    console.log(`Você postou: ${req.body.cliente}`)
    console.log()
    next()
}
