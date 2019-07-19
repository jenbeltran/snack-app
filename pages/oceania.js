import axios from 'axios';
import Link from 'next/link';

const Oceania = ({ posts }) => {
	return (
		<div>
			<h1>Oceania</h1>
			<ul>
				{posts.map((oceaniaSnacks) => (
					<li key={oceaniaSnacks.id}>
						<Link href={`/snack_details/${oceaniaSnacks.id}`}>
							<a>{oceaniaSnacks.name}</a>
						</Link>
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
