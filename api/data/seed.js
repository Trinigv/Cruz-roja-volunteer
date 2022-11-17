const dotenv = require('dotenv');
dotenv.config();
const Matriz = require('../models/matriz');
const fs = require('fs');
const db = require('../app');

db().then();

const matriz = fs.readFileSync(`${__dirname}/data/evets.json`, 'utf-8');
console.log(matriz);
