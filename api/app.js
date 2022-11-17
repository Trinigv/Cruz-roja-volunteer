const express = require('express');
require('dotenv').config();
const { URI, PORT } = process.env;
const router = require('./routes/index.js');
const Matriz = require('./models/matriz');
const path = require('path');
const cors = require('cors');
const matrizData = require('./data/events.json');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.json());
app.use('/api', router);

const mongoose = require('mongoose');

mongoose
	.connect(URI)
	.then(() => console.log('DB connected'))
	.catch((err) => console.log(err));

const importData = async () => {
	try {
		console.log(matrizData);
		await Matriz.create(matrizData);
		console.log('Data successfully imported');
	} catch (err) {
		console.log(err);
	}
};

const deleteData = async () => {
	try {
		await Matriz.deleteMany();
	} catch (err) {
		console.log(err);
	}
};

function check() {
	if (process.argv[2] === '-i') {
		importData().then();
	} else if (process.argv[2] === '-d') {
		deleteData().then();
		console.log('Data deleted');
	}
}
check();

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
