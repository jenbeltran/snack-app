import React from 'react';
import axios from 'axios';

const CountryAPI = require('../CountryAPI');

const SnackDetails = ({ id, posts, countryCode }) => {
	for (let i = 0; i < CountryAPI.default.length; i++) {
		if (posts[0].country === CountryAPI.default[i].name) {
			const countryCode = CountryAPI.default[i].code;
			console.log(countryCode);
		}
		// 	// {
		// 	// 	posts[0].country === CountryAPI.default[i].name && console.log(CountryAPI.default[i].code);
		// 	// }
	}

	return (
		<div>
			<h1>Snack Details {id}</h1>
			{posts.map((snackDetails) => (
				<div key={snackDetails.id}>
					<p>{snackDetails.name}</p>
					<p>{snackDetails.country}</p>
				</div>
			))}

			<img src="https://www.countryflags.io/CA/shiny/64.png" />
		</div>
	);
};

SnackDetails.getInitialProps = async ({ query }) => {
	const { data } = await axios.get(`http://localhost:3000/api/snack_details/${query.id}`);
	return { ...query, posts: data };
};

export default SnackDetails;
