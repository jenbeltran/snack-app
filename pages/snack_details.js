import React from 'react';
import axios from 'axios';

const CountryCodeAPI = require('../CountryCodeAPI');

const SnackDetails = ({ id, posts }) => {
	// must define countryCode so you can pass it down to the img src
	let countryCode;
	for (let i = 0; i < CountryCodeAPI.default.length; i++) {
		if (posts[0].country === CountryCodeAPI.default[i].name) {
			countryCode = CountryCodeAPI.default[i].code;
		}
	}

	return (
		<div>
			{posts.map((snackDetails) => (
				<div key={snackDetails.id}>
					<h1>Snack Details</h1>
					<h3>Continent: {snackDetails.continent}</h3>
					<p>Snack Name: {snackDetails.name}</p>
					<p>Country: {snackDetails.country}</p>
				</div>
			))}

			<img src={`https://www.countryflags.io/${countryCode}/shiny/64.png`} />
		</div>
	);
};

SnackDetails.getInitialProps = async ({ query }) => {
	const { data } = await axios.get(`http://localhost:3000/api/snack_details/${query.id}`);
	return { ...query, posts: data };
};

export default SnackDetails;
