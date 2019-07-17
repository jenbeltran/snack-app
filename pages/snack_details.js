import React from 'react';
import axios from 'axios';

const SnackDetails = ({ id, posts }) => {
	return (
		<div>
			<h1>Snack Details {id}</h1>
			<ul>
				{posts.map((snackDetails) => (
					<li key={snackDetails.id}>
						{snackDetails.name}
						{snackDetails.country}
					</li>
				))}
			</ul>
		</div>
	);
};

SnackDetails.getInitialProps = async ({ query }) => {
	const { data } = await axios.get(`http://localhost:3000/api/snack_details/${query.id}`);
	return { ...query, posts: data };
};

export default SnackDetails;
