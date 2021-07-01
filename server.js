const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const AfiliadoApiRest = require('./api/afiliados')

const app = express()

app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

//incluyo las rutas del archivo de apis
app.use('/api/afiliados', AfiliadoApiRest)

mongoose.connect(
    'mongodb://localhost/afiliados',
    { useNewUrlParser:true },
    (err, res) => {
        err && console.log('Error de conexión al servidor')

        app.listen(5000, () => {
            console.log('Servidor conectado')
        })
    }
)