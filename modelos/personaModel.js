import mongoose from 'mongoose'

//Definir  el esquema de persona:
const Schema = mongoose.Schema;

export const PersonaSchema = new Schema({  
    nombre: {
        type: String,
        required: "Ingrese nombre"
    },
    apellido: {
        type: String,
        required: "Ingrese nombre"
    },
    email:{
        type: String
    },
    empresa: {
        type: String
    },
    imagen:{
        type: String
    },
    telefono:{
        type: String
    }, 
    fecha_creacion: {
        type:Date,
        default: Date.now
    }
 })
