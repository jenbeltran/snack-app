import React from 'react';
import axios from 'axios';

const Europe = ({ posts }) => {
	return (
		<div>
			<h1>Europe</h1>
			<ul>
				{posts.map((europeSnacks) => (
					<li key={europeSnacks.id}>
						{europeSnacks.name}
						{europeSnacks.country}
					</li>
				))}
			</ul>
		</div>
	);
};

Europe.getInitialProps = async () => {
	const { data } = await axios.get('http://localhost:3000/api/europe');
	return { posts: data };
};

export default Europe;
