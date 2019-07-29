import axios from 'axios';
import Link from 'next/link';

const SouthAmerica = ({ posts }) => {
	return (
		<div>
			<h2>South America</h2>
			<ul>
				{posts.map((southSnacks) => (
					<li key={southSnacks.id}>
						<Link href={`/snack_details/${southSnacks.id}`}>
							<a>{southSnacks.name}</a>
						</Link>
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
