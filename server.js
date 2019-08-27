require('dotenv').config();
const express = require('express');
const next = require('next');
const db = require('./database/database');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();
// Parse all incoming <form> data into an object we can access in our routes with `req.body`
server.use(express.json());

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

	server.get('/api/all_snacks', (req, res) => {
		db.query('SELECT * FROM snacks', (error, results, fields) => {
			res.json(results);
		});
	});

	server.get('/api/snack_details/:id', (req, res) => {
		db.query('SELECT * FROM snacks WHERE id=?', [ req.params.id ], (error, results, fields) => {
			res.json(results);
		});
	});

	server.get('/snack_details/:id', (req, res) => {
		app.render(req, res, '/snack_details', { id: req.params.id });
	});

	//TODO:
	server.put('/api/snack_details/:id', (req, res) => {
		db.query(
			'UPDATE snacks SET favourite=(CASE WHEN favourite=0 THEN 1 ELSE 0 END) WHERE id=?',
			[ req.params.id ],
			(error, results, fields) => {
				res.json(results);
			}
		);
	});

	server.get('/search_results/:name', (req, res) => {
		app.render(req, res, '/search_results', { name: req.params.name });
	});

	server.post('/api/all_snacks', (req, res) => {
		db.query(
			'INSERT INTO snacks (name, country, continent, photo) VALUES (?, ?, ?, ?)',
			[ req.body.name, req.body.country, req.body.continent, req.body.photo ],
			(error, results, fields) => {
				res.json(results);
			}
		);
	});

	server.get('*', (req, res) => {
		return handle(req, res);
	});

	server.listen(process.env.HTTP_PORT, (err) => {
		if (err) throw err;
		console.log(`> Now serving on localhost:${process.env.HTTP_PORT}.`);
	});
});
