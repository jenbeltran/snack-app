import axios from 'axios';
import { Container, CardColumns } from 'reactstrap';
import Cards from '../components/Cards';

const Favourites = ({ posts }) => {
	return (
		<div>
			<Container>
				<h2>My Favourites</h2>
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

Favourites.getInitialProps = async () => {
	const { data } = await axios.get('http://localhost:3000/api/all_snacks');
	for (let i = 0; i < data.length; i++) {
		if (data[i].favourite === 1) {
			console.log(data[i]);

			// return { posts: data[i] };
		}
	}
	return { posts: data };
};

export default Favourites;
