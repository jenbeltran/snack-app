import { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import SnackInput from '../styles/SnackInput';
import Countries from '../styles/Countries';
import { Button } from 'reactstrap';

const CountryCodeAPI = require('../CountryCodeAPI');
const ContinentAPI = require('../ContinentAPI');

const AddSnack = (props) => {
	const [ snackName, setSnack ] = useState();
	const [ snackCountry, setCountry ] = useState();
	const [ snackContinent, setContinent ] = useState();

	const handleChangeSnack = (e) => {
		setSnack(e.target.value);
	};
	const handleChangeCountry = (e) => {
		setCountry(e.target.value);
	};

	const handleChangeContinent = (snackCountry) => {
		let countryCode;
		for (let i = 0; i < CountryCodeAPI.default.length; i++) {
			if (snackCountry === CountryCodeAPI.default[i].name) {
				countryCode = CountryCodeAPI.default[i].code;
				console.log(countryCode);
			}
		}
		let continent;
		for (let i = 0; i < ContinentAPI.default.length; i++) {
			if (countryCode === ContinentAPI.default[i].countryCode) {
				continent = ContinentAPI.default[i].countryCode;
				console.log(continent);
			}
		}
		setContinent(continent);
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
				<h5 name="continent" value={snackContinent} onChange={handleChangeContinent}>
					Continent: {snackContinent}
				</h5>
				<Button color="primary" size="sm" type="submit">
					Submit
				</Button>
			</form>
		</div>
	);
};

export default AddSnack;
