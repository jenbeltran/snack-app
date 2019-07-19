import axios from 'axios';
import Link from 'next/link';

const AllSnacks = ({ posts }) => {
	return (
		<div>
			<h1>All Snacks</h1>
			<ul>
				{posts.map((snacks) => (
					<li key={snacks.id}>
						<Link href={`/snack_details/${snacks.id}`}>
							<a>{snacks.name}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

AllSnacks.getInitialProps = async () => {
	const { data } = await axios.get('http://localhost:3000/api/all_snacks');
	return { posts: data };
};

export default AllSnacks;
