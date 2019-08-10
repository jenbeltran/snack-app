import { useState } from 'react';
import { Container, CardColumns } from 'reactstrap';
import Cards from '../components/Cards';

const fetch = require('node-fetch');

const Favourites = () => {
	const [ snacks, setSnacks ] = useState([]);
	let url = 'http://localhost:3000/api/all_snacks';
	fetch(url)
		.then((res) => res.json())
		.then((json) => {
			for (let i = 0; i < json.length; i++) {
				if (json[i].favourite === 1) {
					console.log(snacks.push(json[i]));
					console.log(snacks);
					setSnacks([ ...snacks, json[i] ]);
				} else {
					console.log('not a match');
				}
			}
		})
		.catch((err) => console.log(err));

	return (
		<div>
			<Container>
				<h2>My Favourites</h2>
				<CardColumns>
					{snacks.map((snacks) => (
						<Cards
							key={snacks.id}
							name={snacks.name}
							country={snacks.country}
							id={snacks.id}
							photo={snacks.photo}
							continent={snacks.continent}
						/>
					))}
				</CardColumns>
			</Container>
		</div>
	);
};

export default Favourites;
