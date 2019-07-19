import axios from 'axios';
import Link from 'next/link';

const NorthAmerica = ({ posts }) => {
	return (
		<div>
			<h1>North America</h1>
			<ul>
				{posts.map((northSnacks) => (
					<li key={northSnacks.id}>
						<Link href={`/snack_details/${northSnacks.id}`}>
							<a>{northSnacks.name}</a>
						</Link>
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
