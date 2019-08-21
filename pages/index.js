import { useState } from 'react';
import { Container, Row, CardColumns } from 'reactstrap';
import Cards from '../components/Cards';

const fetch = require('node-fetch');

const SearchSnackResults = () => {
	const [ snacks, setSnacks ] = useState([]);
	const [ query, setQuery ] = useState('');

	const handleQuery = (e) => {
		setQuery(e.target.value);
	};

	const handleSubmitQuery = (event) => {
		console.log('handleSubmitQuery');
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
				for (let i = 0; i < json.length; i++) {
					if (queryText === json[i].name) {
						setSnacks([ ...snacks, json[i] ]);
						console.log(snacks.push(json[i]));
					}
				}
			})
			.catch((err) => console.log(err));
	};

	const handleClearInputBox = (event) => {
		console.log('handleClearInputBox');
		setQuery('');
		setSnacks([]);
		console.log(query);
	};

	return (
		<div>
			<Container>
				<img
					className="col-sm-12 col-md-6 offset-md-3"
					src="https://lh3.googleusercontent.com/cHWR-K0aY1luxGrVWdBWlZaB8o4xXU_vZCF8WsJ_bHyZKt-nQsWldmXcnB6K3TL7yU7KkrDBB9BgI8-s7yNZYxvM7xW0VHocEPGFNxzFgqNSZmMRTalJGZyo5MLE12cl5cF6qBXUHyOBwtomuLTn6Z3BXuwSSEybz3EamWHklZ4ZSz6rZUsceO8RpcodsC_iSZpZKzq7IVDf4a76zsPKK62R5_AQSVbdRpN1l_KI3JljCI9YZuARrt-9XBrZWF9gpBA8kMIAzpvhvC422pZ5EfsSG5vn69gDjQKkWljG0AB9zhChTgXu_xubPdbhUtJqcg1RPcdvLAUMgtSlJPq8l-du-RLxg4j2SNXH6SKZ0e29uaR8HKCl47pR1VwulnWz3GiDWdg0-UBF7HhUk_qemJsqML7PyT3EqA72GrYdddn72sBFJKO65-wvRFd5IH-UDLrQFxhMdH4vy3TpuhmGSeL6Oj8TMNCC7e4IUw961-X8TiO93yJKWpjbTRTqWTEdn9nhvfXwjwbV1m7rspHw_c7bY_hq-lJmVc7OpLNaHzji5vlipE_DtTcoKxZWOq9OEdZQkYWjSXz48AeNgZdvgs8u0KE0qpAWk6G-Ceop_d_rRjHiJM9LdjzpZ1-eCmXmzifVuDcY9fbnd8GysQE9pmcTEKbeRRjJSUG07f-z8-mdj3DCn50PFfeTtogyIPSsAW1fGbYDHMTqlNeoL1aLYZPx=w836-h616-no"
					alt="Pick My Snack Logo"
				/>

				<form>
					<input
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
						onClick={handleSubmitQuery}
					>
						Submit
					</button>
				</form>

				<CardColumns>
					{snacks.map((snacks) => (
						<Cards
							name={snacks.name}
							country={snacks.country}
							id={snacks.id}
							photo={snacks.photo}
							continent={snacks.continent}
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
			`}</style>
		</div>
	);
};

export default SearchSnackResults;
