import { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import SnackInput from '../styles/SnackInput';
import Countries from '../styles/Countries';
import { Button } from 'reactstrap';

const CountryContinentAPI = require('../CountryContinentAPI');

const AddSnack = (props) => {
	const [ snackName, setSnack ] = useState();
	const [ snackCountry, setCountry ] = useState();
	const [ snackContinent, setContinent ] = useState();

	const handleChangeSnack = (e) => {
		setSnack(e.target.value);
	};
	const handleChangeCountry = (e) => {
		console.log('handleChangeCountry');
		setCountry(e.target.value);
		console.log(snackCountry);
		handleChangeContinent(snackCountry);
	};

	const handleChangeContinent = (snackCountry) => {
		console.log('handleChangeContinent');
		for (let i = 0; i < CountryContinentAPI.default.length; i++) {
			if (snackCountry === CountryContinentAPI.default[i].country) {
				console.log(CountryContinentAPI.default[i].continent);
				setContinent(CountryContinentAPI.default[i].continent);
				console.log('continent state changed');
				console.log(snackContinent);
			}
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post('http://localhost:3000/api/all_snacks', {
				name      : snackName,
				country   : snackCountry,
				continent : snackContinent
			})
			.then((data) => console.log(data))
			.then(Router.push(`/`))
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<h2>Add a Snack</h2>
			<form onSubmit={handleSubmit}>
				<h5>Snack Name:</h5>
				<SnackInput name="name" value={snackName} onChange={handleChangeSnack} />
				<h5>Country of Origin:</h5>
				<Countries name="country" value={snackCountry} onChange={handleChangeCountry} />
				<h5>Continent: {snackContinent} </h5>
				<Button color="primary" size="sm" type="submit">
					Submit
				</Button>
			</form>
		</div>
	);
};

export default AddSnack;
