import { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import SnackInput from '../styles/SnackInput';
import Countries from '../styles/Countries';

const AddSnack = (props) => {
	const [ snackName, setSnack ] = useState();
	const [ snackCountry, setCountry ] = useState();

	const handleChangeSnack = (e) => {
		setSnack(e.target.value);
	};
	const handleChangeCountry = (e) => {
		setCountry(e.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post('http://localhost:3000/api/all_snacks', {
				name    : snackName,
				country : snackCountry
			})
			.then((data) => console.log(data))
			.then(Router.push(`/`))
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				Snack:
				<SnackInput name="name" value={snackName} onChange={handleChangeSnack} />
				<Countries name="country" value={snackCountry} onChange={handleChangeCountry} />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default AddSnack;
