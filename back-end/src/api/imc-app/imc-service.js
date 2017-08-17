const Imc = require('./imc')

Imc.methods(['get', 'post', 'put', 'delete'])
Imc.updateOptions({new: true, runValidators: true})

module.exports = Imc