import axios from 'axios';
import Link from 'next/link';

const Europe = ({ posts }) => {
	return (
		<div>
			<h1>Europe</h1>
			<ul>
				{posts.map((europeSnacks) => (
					<li key={europeSnacks.id}>
						<Link href={`/snack_details/${europeSnacks.id}`}>
							<a>{europeSnacks.name}</a>
						</Link>
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
