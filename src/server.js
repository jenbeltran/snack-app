require('dotenv').config();
const express = require('express');
const next = require('next');
const db = require('./database');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();

app.prepare().then(() => {
	server.get('/asia', (req, res) => {
		db.query('SELECT * FROM snacks WHERE continent="asia"', (error, results, fields) => {
			res.json(results);
			console.log(results);
		});
	});

	server.get('*', (req, res) => {
		return handle(req, res);
	});

	server.listen(process.env.HTTP_PORT, (err) => {
		if (err) throw err;
		console.log(`>Now serving on localhost:${process.env.HTTP_PORT}.`);
	});
});
