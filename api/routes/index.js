const { Router } = require('express');
const router = Router();
const Matriz = require('../models/matriz');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
const { saltRounds, MY_SECRET } = process.env;

router.post('/register', async (req, res) => {
	const { name, email, password } = req.body;

	try {
		if (name !== null && email !== null && password !== null) {
			const salt = parseInt(saltRounds);
			const hash = bcrypt.hashSync(password, salt);
			const new_user = await User.create({
				name: name,
				email: email,
				password: hash,
			});
			return res.status(201).send(new_user);
		} else {
			res.send('Error: Missing data');
		}
	} catch (err) {
		console.log(err);
	}
});

router.post('/login', async (req, res) => {
	const { password, email } = req.body;
	try {
		const user = await User.findOne({ email: email });
		if (user) {
			var match = await bcrypt.compare(password, user.password);
			console.log(match);
			if (match === true) {
				const jwtToken = jwt.sign(
					{
						//token creation
						id: user.id,
						email: user.email,
					},
					MY_SECRET,
					{ expiresIn: '12h' }
				);
				res.status(200).json({
					token: jwtToken,
					email: user.email,
					name: user.name,
				});
			} else {
				res.send('Incorrect user or password');
			}
		} else {
			res.status(400).send('Incorrect user or password');
		}
	} catch (e) {
		console.log(e);
	}
});

router.get('/display', async (req, res) => {
	try {
		const result = await Matriz.find();
		return res.status(200).send(result);
	} catch (error) {
		console.log(error);
	}
});

router.get('/find', async (req, res) => {
	try {
		const result = await Matriz.find();
		return res.status(200).send(result);
	} catch (error) {
		console.log(error);
	}
});

router.post('/add', async (req, res) => {
	const { fecha, ubicacion, evento, link, resumen } = req.body;
	console.log(req.body);
	try {
		await Matriz.create({
			fecha: fecha,
			ubicacion: ubicacion,
			evento: evento,
			link: link,
			resumen: resumen,
			status: 'Abierto',
		});
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
