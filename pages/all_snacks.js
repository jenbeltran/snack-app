import axios from 'axios';
import { Container, CardColumns } from 'reactstrap';
import Cards from '../static/components/Cards';

const AllSnacks = ({ posts }) => {
	return (
		<div>
			<Container>
				<h1>All Snacks</h1>
				<CardColumns>
					{posts.map((snacks) => (
						<Cards
							key={snacks.id}
							name={snacks.name}
							country={snacks.country}
							id={snacks.id}
							photo={snacks.photo}
							continent={snacks.continent}
						/>
					))}
				</CardColumns>
			</Container>
		</div>
	);
};

AllSnacks.getInitialProps = async () => {
	const { data } = await axios.get('http://localhost:3000/api/all_snacks');
	return { posts: data };
};

export default AllSnacks;
