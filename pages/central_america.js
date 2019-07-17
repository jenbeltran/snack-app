import React from 'react';
import axios from 'axios';

const CentralAmerica = ({ posts }) => {
	return (
		<div>
			<h1>Central America</h1>
			<ul>
				{posts.map((centralSnacks) => (
					<li key={centralSnacks.id}>
						{centralSnacks.name}
						{centralSnacks.country}
					</li>
				))}
			</ul>
		</div>
	);
};

CentralAmerica.getInitialProps = async () => {
	const { data } = await axios.get('http://localhost:3000/api/central_america');
	return { posts: data };
};

export default CentralAmerica;
