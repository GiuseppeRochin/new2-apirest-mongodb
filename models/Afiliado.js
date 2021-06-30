const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AfiliadoSchema = new Schema([{
    noContrato: { type: Number, unique: true },
    correo: { type: String, lowercase: true },
    contrasena: String,
    nombre: String,
    creado_el: { type: Date, default: Date.now() },
    invitado: {
        nombre_invitado: String,
        edad_invitado: Number,
        sexo_invitado: String,
        parentesco: String
    },
    mesa: {
        letra_mesa: String,
        numero_mesa: Number
    },
    hotel: {
        habitacion: String,
        nombre_hotal: String
    }
}])

module.exports = AfiliadoModel = mongoose.model('registros', AfiliadoSchema)