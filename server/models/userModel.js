const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema({
    conta: {
        type: String
    },
    senha: {
        type: String
    },
    campo: {
        type: String
    },
    bairro: {
        type: String
    },
    endereco: {
        type: String
    },
    privado: {
        type: String
    },
    midia: {
        type: String
    },
    titulo: {
        type: String
    },
    assunto: {
        type: String
    },
    datainicial: {
        type: String
    }
});

const User = mongoose.model("users", userSchema);

module.exports = User;
