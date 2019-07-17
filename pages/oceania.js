import React from 'react';
import axios from 'axios';

const Oceania = ({ posts }) => {
	return (
		<div>
			<h1>Oceania</h1>
			<ul>
				{posts.map((oceaniaSnacks) => (
					<li key={oceaniaSnacks.id}>
						{oceaniaSnacks.name}
						{oceaniaSnacks.country}
					</li>
				))}
			</ul>
		</div>
	);
};

Oceania.getInitialProps = async () => {
	const { data } = await axios.get('http://localhost:3000/api/oceania');
	return { posts: data };
};

export default Oceania;
