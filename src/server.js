require('dotenv').config();
const express = require('express');
const next = require('next');
const db = require('./database');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();

app.prepare().then(() => {
	server.get('/api/north_america', (req, res) => {
		db.query('SELECT * FROM snacks WHERE continent="north america"', (error, results, fields) => {
			res.json(results);
		});
	});

	server.get('/api/central_america', (req, res) => {
		db.query('SELECT * FROM snacks WHERE continent="central america"', (error, results, fields) => {
			res.json(results);
		});
	});

	server.get('/api/south_america', (req, res) => {
		db.query('SELECT * FROM snacks WHERE continent="south america"', (error, results, fields) => {
			res.json(results);
		});
	});

	server.get('/api/europe', (req, res) => {
		db.query('SELECT * FROM snacks WHERE continent="europe"', (error, results, fields) => {
			res.json(results);
		});
	});

	server.get('/api/asia', (req, res) => {
		db.query('SELECT * FROM snacks WHERE continent="asia"', (error, results, fields) => {
			res.json(results);
		});
	});

	server.get('/api/oceania', (req, res) => {
		db.query('SELECT * FROM snacks WHERE continent="oceania"', (error, results, fields) => {
			res.json(results);
		});
	});

	server.get('/api/snack_details/:id', (req, res) => {
		db.query('SELECT * FROM snacks WHERE id=?', [ req.params.id ], (error, results, fields) => {
			res.json(results);
			console.log(results);
		});
	});

	server.get('/snack_details/:id', (req, res) => {
		app.render(req, res, '/snack_details', { id: req.params.id });
	});

	server.get('*', (req, res) => {
		return handle(req, res);
	});

	server.listen(process.env.HTTP_PORT, (err) => {
		if (err) throw err;
		console.log(`>Now serving on localhost:${process.env.HTTP_PORT}.`);
	});
});
