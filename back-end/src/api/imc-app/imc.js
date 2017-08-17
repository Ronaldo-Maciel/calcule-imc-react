const restful = require('node-restful')
const mongoose = restful.mongoose

const imcSchema = new mongoose.Schema({
    name: { type: String, required: true},
    height: { type: Number, required: true, default: false},
    weight: { type: Number, required: true, default: false},
    imc: { type: Number, required: true, default: false },
    createdAt: { type: Date, default: Date.now}
})

module.exports = restful.model('Imc', imcSchema)