const express = require('express')
const AfiliadoController = require('../controllers/afiliados')

const router = express.Router()

// 1) obtenerTodosRegistros, 2) obtenerPorId, 3) ValidarAfiliado
// 4) eliminarAfiliado, 5) crearAfiliado

router.get('/getall', AfiliadoController.obtenerTodosRegistros)

router.post('/getbyid', AfiliadoController.obtenerPorId)

router.post('/validarafiliado', AfiliadoController.ValidarAfiliado)

router.post('/eliminar', AfiliadoController.eliminarAfiliado)

router.post('/agregarafiliado', AfiliadoController.crearAfiliado)

module.exports = router;