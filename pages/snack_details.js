import React from 'react';
import axios from 'axios';
import Router from 'next/router';
import { Container, Row, Col, Card, CardBody, CardTitle, Button } from 'reactstrap';

const CountryCodeAPI = require('../api/CountryCodeAPI');

const SnackDetails = ({ posts }) => {
	// must define countryCode so you can pass it down to the img src
	let countryCode;
	for (let i = 0; i < CountryCodeAPI.default.length; i++) {
		if (posts[0].country === CountryCodeAPI.default[i].name) {
			countryCode = CountryCodeAPI.default[i].code;
		}
	}

	const SelectFavourite = () => {
		let id = posts[0].id;
		event.preventDefault();
		axios
			.put(`http://localhost:3000/api/snack_details/${id}`)
			.then((data) => console.log(data))
			.then(Router.push(`/snack_details/${id}`))
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<Container>
				<h1>Snack Details</h1>
				<Row>
					<Col sm="6">
						<Card>
							<CardBody>
								{posts.map((snackDetails) => (
									<div key={snackDetails.id}>
										<CardTitle>
											<h4>{snackDetails.name}</h4>
										</CardTitle>
										<img src={snackDetails.photo} alt="snack image" width="300" height="200" />
										<h6>Country: {snackDetails.country}</h6>
										<p>Continent: {snackDetails.continent}</p>
									</div>
								))}

								<img src={`https://www.countryflags.io/${countryCode}/shiny/64.png`} alt="flag image" />
							</CardBody>
						</Card>
					</Col>

					<Col sm="6">
						<Card>
							<CardBody>
								<CardTitle>
									<h4>Buy Now</h4>
									<h6>Scan below to purchase</h6>
								</CardTitle>
								{posts.map((snackDetails) => (
									<div key={snackDetails.id}>
										<img
											src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.amazon.ca/s?k=${snackDetails.name}&ref=nb_sb_noss`}
											alt={`${snackDetails.name} QR code`}
										/>
									</div>
								))}
							</CardBody>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col sm="6">
						<CardBody>
							{posts.map((snackDetails) => (
								<div key={snackDetails.id}>
									{snackDetails.favourite === 1 ? (
										<Button color="danger" size="sm" type="submit" onClick={SelectFavourite}>
											Remove from Favourites
										</Button>
									) : (
										<Button color="primary" size="sm" type="submit" onClick={SelectFavourite}>
											Add to Favourites
										</Button>
									)}
								</div>
							))}
						</CardBody>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

SnackDetails.getInitialProps = async ({ query }) => {
	const { data } = await axios.get(`http://localhost:3000/api/snack_details/${query.id}`);
	return { ...query, posts: data };
};

export default SnackDetails;
