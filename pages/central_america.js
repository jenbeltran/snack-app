import axios from 'axios';
import Link from 'next/link';

const CentralAmerica = ({ posts }) => {
	return (
		<div>
			<h2>Central America</h2>
			<ul>
				{posts.map((centralSnacks) => (
					<li key={centralSnacks.id}>
						<Link href={`/snack_details/${centralSnacks.id}`}>
							<a>{centralSnacks.name}</a>
						</Link>
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
