const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matrizSchema = new Schema({
	fecha: String,
	ubicacion: String,
	evento: String,
	link: String,
	resumen: String,
	status: {
		type: String,
		enum: ['Abierto', 'Cerrado'],
	},
});

const Matriz = mongoose.model('Matriz', matrizSchema);

module.exports = Matriz;
