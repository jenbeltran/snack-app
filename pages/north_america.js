import React from 'react';
import axios from 'axios';

const NorthAmerica = ({ posts }) => {
	return (
		<div>
			<h1>North America</h1>
			<ul>
				{posts.map((northSnacks) => (
					<li key={northSnacks.id}>
						{northSnacks.name}
						{northSnacks.country}
					</li>
				))}
			</ul>
		</div>
	);
};

NorthAmerica.getInitialProps = async () => {
	const { data } = await axios.get('http://localhost:3000/api/north_america');
	return { posts: data };
};

export default NorthAmerica;
