const express = require('express')

module.exports = function(server) {
    const router = express.Router()
    server.use('/api', router)

    const imcService = require('../api/imc-app/imc-service')
    imcService.register(router, '/imcs')
}