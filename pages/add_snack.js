import { useState, useEffect } from 'react';
import axios from 'axios';
import Router from 'next/router';
import SnackInput from '../styles/SnackInput';
import Countries from '../styles/Countries';
import Modal from '../components/Modal';
import { Container } from 'reactstrap';

const CountryContinentAPI = require('../CountryContinentAPI');

const AddSnack = () => {
	const [ snackName, setSnack ] = useState();
	const [ snackCountry, setCountry ] = useState();
	const [ snackContinent, setContinent ] = useState();
	const [ snackPhoto, setPhoto ] = useState();

	const handleChangeSnack = (e) => {
		console.log('handleChangeSnack');
		setSnack(e.target.value);
	};

	const handleChangeCountry = (e) => {
		console.log('handleChangeCountry');
		setCountry(e.target.value);
	};

	useEffect(
		() => {
			const handleChangeContinent = (snackCountry) => {
				console.log('handleChangeContinent');
				for (let i = 0; i < CountryContinentAPI.default.length; i++) {
					if (snackCountry === CountryContinentAPI.default[i].country) {
						setContinent(CountryContinentAPI.default[i].continent);
						console.log(snackContinent);
					}
				}
			};
			handleChangeContinent(snackCountry);
		},
		[ snackCountry ]
	);

	const handleChangePhoto = (e) => {
		console.log('handleChangePhoto');
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
			.then((data) => console.log(data))
			.then(Router.push(`/`))
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<Container>
				<h2>Add a Snack</h2>
				<form>
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
				</form>
			</Container>
		</div>
	);
};

export default AddSnack;
