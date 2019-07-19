import { useState, useRef } from 'react';
import axios from 'axios';
import SnackInput from '../src/styles/SnackInput';
import Countries from '../src/styles/Countries';

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
		alert(`${snackName} ${snackCountry}`);
		axios
			.post('http://localhost:3000/api/all_snacks', {
				name    : snackName,
				country : snackCountry
			})
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
	};

	return (
		<form onSubmit={handleSubmit}>
			Snack:
			<input type="text" name="name" value={snackName} onChange={handleChangeSnack} />
			<input type="text" name="country" value={snackCountry} onChange={handleChangeCountry} />
			<button type="submit">Submit</button>
		</form>
	);
};

export default AddSnack;
