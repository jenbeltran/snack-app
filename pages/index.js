import React from 'react';
import { useState } from 'react';
import { Container, CardColumns } from 'reactstrap';
import Cards from '../static/components/Cards';

const fetch = require('node-fetch');

const SearchSnackResults = () => {
	const [ snacks, setSnacks ] = useState([]);
	const [ query, setQuery ] = useState('');

	const handleQuery = (e) => {
		setQuery(e.target.value);
	};

	const handleSubmitQuery = (event) => {
		event.preventDefault();
		let queryText;
		queryText = query
			.toLowerCase()
			.split(' ')
			.map((query) => query.charAt(0).toUpperCase() + query.substring(1))
			.join(' ');
		let url = 'http://localhost:3000/api/all_snacks';
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				const newSnacks = [];
				const snackReg = new RegExp(queryText, 'gi');
				for (let i = 0; i < json.length; i++) {
					if (json[i].name.match(snackReg) && queryText != '') {
						newSnacks.push(json[i]);
					}
				}
				console.log(newSnacks);
				setSnacks([ ...newSnacks ]);
			})
			.catch((err) => console.log(err));
	};

	const handleClearInputBox = (event) => {
		setQuery('');
		setSnacks([]);
	};
	return (
		<div>
			<Container>
				<img className="col-sm-10 col-md-4 offset-md-4" src="static/logo.png" alt="Pick My Snack Logo" />

				<form>
					<label className="col-sm-12 col-md-6 offset-md-5" htmlFor="search">
						Search Snack
					</label>
					<input
						id="search"
						className="form-control col-sm-12 col-md-6 offset-md-3"
						type="text"
						placeholder="Enter Snack Name Here"
						name="name"
						onChange={handleQuery}
						onClick={handleClearInputBox}
					/>

					<button
						className="col-sm-6 col-md-4 offset-md-4 btn btn-dark"
						type="submit"
						data-testid="submit-button"
						onClick={handleSubmitQuery}
					>
						Submit
					</button>
				</form>

				<CardColumns>
					{snacks.map((snacks, index) => (
						<Cards
							key={snacks.id}
							name={snacks.name}
							country={snacks.country}
							id={snacks.id}
							photo={snacks.photo}
							continent={snacks.continent}
							index={index}
						/>
					))}
				</CardColumns>
			</Container>
			<style jsx>{`
				img {
					padding: 2em;
				}
				input {
					text-align: center;
				}
				form {
					margin-bottom: 5em;
				}
			`}</style>
		</div>
	);
};

export default SearchSnackResults;
