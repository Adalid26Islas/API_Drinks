import { Schema, model } from "mongoose";
const drinkSchema = new Schema({
    barcode:{
        type:String,
        required: true,
        unique: true
    },
    nombre: String,
    tipo: String,
    alcohol: String,
    marca: String,
    precio: Number,
    categoria: String,
    disponibilidad: Number
}, {
        versionKey:false
    });
    export default model('drink', drinkSchema);