import { useState } from 'react';
import Link from 'next/link';
const fetch = require('node-fetch');

const SearchSnackResults = () => {
	const [ snacks, setSnacks ] = useState([]);
	const [ query, setQuery ] = useState();

	const handleQuery = (e) => {
		setQuery(e.target.value);
	};

	const handleSubmitQuery = (event) => {
		console.log('handleSubmitQuery');
		console.log(query);
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
					if (queryText != json[i].name) {
						console.log('not match');
					} else {
						setSnacks([ ...snacks, json[i] ]);
						console.log(snacks.push(json[i]));
						console.log(snacks);
					}
				}
			})
			.catch((err) => console.log(err));
	};

	const handleClearInputBox = (event) => {
		console.log('handleClearInputBox');
		setQuery('');
		setSnacks([]);
	};

	const onClick = (event) => {
		handleSubmitQuery(event).then((event) => {
			handleClearInputBox(event);
		});
	};

	return (
		<div>
			<h2>Search</h2>
			<form>
				<input name="name" onChange={handleQuery} />
				<button type="submit" onClick={handleSubmitQuery}>
					Submit
				</button>
				<button type="submit" onClick={handleClearInputBox}>
					Reset
				</button>
			</form>
			<ul>
				{snacks.map((snacks) => {
					return (
						<li snacks={snacks} key={snacks.id}>
							<Link href={`/snack_details/${snacks.id}`}>
								<a>{snacks.name}</a>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default SearchSnackResults;
