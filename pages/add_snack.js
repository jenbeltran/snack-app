import { useState, useEffect } from 'react';
import axios from 'axios';
import Router from 'next/router';
import SnackInput from '../static/styles/SnackInput';
import Countries from '../static/styles/Countries';
import Modal from '../static/components/Modal';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';

const CountryContinentAPI = require('../src/CountryContinentAPI');

const AddSnack = (event) => {
	const [ snackName, setSnack ] = useState();
	const [ snackCountry, setCountry ] = useState();
	const [ snackContinent, setContinent ] = useState();
	const [ snackPhoto, setPhoto ] = useState();

	const handleChangeSnack = (e) => {
		setSnack(e.target.value);
	};

	const handleChangeCountry = (e) => {
		setCountry(e.target.value);
	};

	useEffect(
		() => {
			const handleChangeContinent = (snackCountry) => {
				for (let i = 0; i < CountryContinentAPI.default.length; i++) {
					if (snackCountry === CountryContinentAPI.default[i].country) {
						setContinent(CountryContinentAPI.default[i].continent);
					}
				}
			};
			handleChangeContinent(snackCountry);
		},
		[ snackCountry ]
	);

	const handleChangePhoto = (e) => {
		setPhoto(e.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		let snackNameText;
		snackNameText = snackName
			.toLowerCase()
			.split(' ')
			.map((snack) => snack.charAt(0).toUpperCase() + snack.substring(1))
			.join(' ');

		axios
			.post('http://localhost:3000/api/all_snacks', {
				name      : snackNameText,
				country   : snackCountry,
				continent : snackContinent,
				photo     : snackPhoto
			})
			.then(Router.push(`/all_snacks`))
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<Container>
				<h1>Add a Snack</h1>
				<Row>
					<Col sm="6">
						<Card>
							<CardBody>
								<h5>Snack Name:</h5>
								<SnackInput name="name" value={snackName} onChange={handleChangeSnack} />
								<h5>Country of Origin:</h5>
								<Countries name="country" value={snackCountry} onChange={handleChangeCountry} />
								<h5>Continent:</h5>
								<SnackInput name="continent" value={snackContinent} readOnly />
								<h5>Photo:</h5>
								<SnackInput name="photo" value={snackPhoto} onChange={handleChangePhoto} />
								<Modal
									onClick={handleSubmit}
									name={snackName}
									country={snackCountry}
									continent={snackContinent}
									photo={snackPhoto}
								/>
							</CardBody>
						</Card>
					</Col>
					<Col sm="6">
						<CardBody>
							<img width="95%" height="95%" src="static/donut.png" alt="Donut photo" />
						</CardBody>
					</Col>
				</Row>
			</Container>
			<style jsx>{`
				form {
					margin-bottom: 0;
					margin-left: 20px;
				}
				h5 {
					margin-bottom: 0;
					margin-top: 20px;
				}
			`}</style>
		</div>
	);
};

AddSnack.getInitialProps = async () => {
	const { data } = await axios.get('http://localhost:3000/api/all_snacks');
	return { posts: data };
};

export default AddSnack;
