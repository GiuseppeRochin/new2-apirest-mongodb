const mongoose = require('mongoose')
const Afiliado = require('../models/Afiliado')

//creamos apis para 5 procesos:
// 1) obtenerTodosRegistros, 2) obtenerPorId, 3) ValidarAfiliado
// 4) eliminarAfiliado, 5) crearAfiliado

const obtenerTodosRegistros = (req, res) => {
    Afiliado.find((err, afiliados) => {
        err && res.status(500).send(err.message)

        res.status(200).json(afiliados)
    })
}

const obtenerPorId = (req, res) => {
    Afiliado.findById(req.body.id, (err, afiliado) => {
        err && res.status(500).send(err.message)

        res.status(200).json(afiliado)
    })
}

const ValidarAfiliado = (req, res) => {
    Afiliado.find({
        noContrato: req.body.noContrato,
        correo: req.body.correo,
        contrasena: req.body.contrasena
    }, (err, afiliadoValido) => {
        err && res.status(500).json(err.message)

        res.status(200).json(afiliadoValido)
    })
}

const eliminarAfiliado = (req, res) => {
    Afiliado.findByIdAndDelete(req.body.id, (err, afiliadoEliminado) => {
        err && res.status(500).send(err.message)

        res.status(200).json({'Mensaje': `Afiliado con id ${req.body.id} eliminado correctamente`, 'IsDeleted': true})
    })
}

const crearAfiliado = (req, res) => {
    Afiliado.insertMany(req.body, (err, afiliadoNuevo) => {
        err && res.status(500).send(err.message)

        res.status(200).json({'IsGood': true})
    })
}

module.exports = { obtenerTodosRegistros, obtenerPorId, ValidarAfiliado, eliminarAfiliado, crearAfiliado }