import React from 'react';
import axios from 'axios';

const SouthAmerica = ({ posts }) => {
	return (
		<div>
			<h1>South America</h1>
			<ul>
				{posts.map((southSnacks) => (
					<li key={southSnacks.id}>
						{southSnacks.name}
						{southSnacks.country}
					</li>
				))}
			</ul>
		</div>
	);
};

SouthAmerica.getInitialProps = async () => {
	const { data } = await axios.get('http://localhost:3000/api/south_america');
	return { posts: data };
};

export default SouthAmerica;
