import React from 'react';
import { useState } from 'react';
import { Container, CardColumns } from 'reactstrap';
import Cards from '../components/Cards';

const fetch = require('node-fetch');

const SearchSnackResults = () => {
	const [ snacks, setSnacks ] = useState([]);
	const [ query, setQuery ] = useState('');

	const handleQuery = (e) => {
		setQuery(e.target.value);
	};

	const handleSubmitQuery = (event) => {
		console.log('handleSubmitQuery');
		event.preventDefault();
		let queryText;
		queryText = query
			.toLowerCase()
			.split(' ')
			.map((query) => query.charAt(0).toUpperCase() + query.substring(1))
			.join(' ');
		let url = 'http://localhost:3000/api/all_snacks';
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				for (let i = 0; i < json.length; i++) {
					if (queryText === json[i].name) {
						setSnacks([ ...snacks, json[i] ]);
						console.log(snacks.push(json[i]));
					}
				}
			})
			.catch((err) => console.log(err));
	};

	const handleClearInputBox = (event) => {
		console.log('handleClearInputBox');
		setQuery('');
		setSnacks([]);
		console.log(query);
	};

	return (
		<div>
			<Container>
				<img
					className="col-sm-10 col-md-4 offset-md-4"
					src="https://lh3.googleusercontent.com/1cudL-wlP_9D-RCPwDa1BkgcvN1RQabBjsT9PNc3ibAv3CnSORrAtBqOGY22JXnjvk_Echm9s0YIijXxvzG3GsbPkxEQ4HFJcWZSgoquGGK7X-2c54THVrVYyeeDR_BxMd_SWCl1mOUYXv_OXoFES0g7qnbft-TEC3E2Kg71HJh0jV2We5ddWsSx8xom8SQ4rqvmYahIkF0CpKQ7APOU67ka44vAdv9_EQi0Lvtp0c4I78V4nu0r3SZRCKoJU2mbJ8ROLFWnrlYbzh0WzI_lQBUIIjybwk9M6gqixK_d_FT2bgGmrw8ul_7VSzQZ4ogF0G-qcqXr7yKcLZcWN9t8U8n2jJE7eT5s9oGrGAHbXMwIXqfLgHDMgwxTKfiOoCSDF02dbU0aUyVkx_XsDSw0c7hV0Zf2hVloIL9_ndGp0aVR-9AcMi8dlBGCJqVWkW9bgrf6MJKrI5ZUE6aUKkoWWRMX18onQvKBHTdh3T1VbdxdvIOq4AoIhW9yZ18UpA6PLMgM9QoZ2wNFK1H6WyPtQ_zOwi1Kbca8HkQUkadaLA7-C1l3UB5hcKTkxn1jSX3SrOZ5TBHe66wjiRiYXF8UgUCDa0BkztyoCsPbSmhRIQoT3SrCoiwnoBt_BHvaGA9owa2GfOZ8MvEtvFi60pb_0NN6D9iXmSjDEhvXxmUGsHQ7Q3dCug5H7Nvwe2D7pkcn2Q3D26tVzpslDsmYNhsuDSrd=w836-h616-no"
					alt="Pick My Snack Logo"
				/>

				<form>
					<input
						className="form-control col-sm-12 col-md-6 offset-md-3"
						type="text"
						placeholder="Enter Snack Name Here"
						name="name"
						onChange={handleQuery}
						onClick={handleClearInputBox}
					/>

					<button
						className="col-sm-6 col-md-4 offset-md-4 btn btn-dark"
						type="submit"
						onClick={handleSubmitQuery}
					>
						Submit
					</button>
				</form>

				<CardColumns>
					{snacks.map((snacks) => (
						<Cards
							name={snacks.name}
							country={snacks.country}
							id={snacks.id}
							photo={snacks.photo}
							continent={snacks.continent}
						/>
					))}
				</CardColumns>
			</Container>
			<style jsx>{`
				img {
					padding: 2em;
				}
				input {
					text-align: center;
				}
				form {
					margin-bottom: 5em;
				}
			`}</style>
		</div>
	);
};

export default SearchSnackResults;
