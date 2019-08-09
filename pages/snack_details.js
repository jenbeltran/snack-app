import React from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';

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
			<h2>Snack Details</h2>

			{posts.map((snackDetails) => (
				<div key={snackDetails.id}>
					<h4>{snackDetails.name}</h4>
					<img src={snackDetails.photo} alt="snack image" width="300" height="200" />
					<h6>Country: {snackDetails.country}</h6>
					<p>Continent: {snackDetails.continent}</p>
				</div>
			))}

			<img src={`https://www.countryflags.io/${countryCode}/shiny/64.png`} alt="flag image" />

			{posts.map((snackDetails) => (
				<div key={snackDetails.id}>
					<h4>Buy Now</h4>
					<h6>Scan below to purchase</h6>
					<img
						src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.amazon.ca/s?k=${snackDetails.name}&ref=nb_sb_noss`}
						alt="snack QR code"
					/>
				</div>
			))}

			<Button color="info" size="sm" type="submit">
				Add to Favourites
			</Button>
		</div>
	);
};

SnackDetails.getInitialProps = async ({ query }) => {
	const { data } = await axios.get(`http://localhost:3000/api/snack_details/${query.id}`);
	return { ...query, posts: data };
};

export default SnackDetails;
