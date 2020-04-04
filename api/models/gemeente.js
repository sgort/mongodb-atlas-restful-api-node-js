const mongoose = require('mongoose');

const gemeenteSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Gemeentecode: Number,
    GemeentecodeGM: String,
    Gemeentenaam: String,
    Provinciecode: Number,
    ProvinciecodePV: String,
    Provincienaam: String
}, { collection: 'gemeenten' });

module.exports = mongoose.model('Gemeente', gemeenteSchema);