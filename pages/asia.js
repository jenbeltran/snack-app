import axios from 'axios';
import Link from 'next/link';

const Asia = ({ posts }) => {
	return (
		<div>
			<h1>Asia</h1>
			<ul>
				{posts.map((asiaSnacks) => (
					<li key={asiaSnacks.id}>
						<Link href={`/snack_details/${asiaSnacks.id}`}>
							<a>{asiaSnacks.name}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

Asia.getInitialProps = async () => {
	const { data } = await axios.get('http://localhost:3000/api/asia');
	return { posts: data };
};

export default Asia;
