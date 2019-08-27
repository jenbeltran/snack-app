import axios from 'axios';
import { Container, CardColumns } from 'reactstrap';
import Cards from '../components/Cards';

const Faves = ({ posts }) => {
	return (
		<div>
			<Container>
				<h1>Faves</h1>
				<CardColumns>
					{posts.map((snacks) => {
						return snacks.favourite === 1 ? (
							<Cards
								key={snacks.id}
								name={snacks.name}
								country={snacks.country}
								id={snacks.id}
								photo={snacks.photo}
								continent={snacks.continent}
							/>
						) : (
							''
						);
					})}
				</CardColumns>
			</Container>
		</div>
	);
};

Faves.getInitialProps = async () => {
	const { data } = await axios.get('http://localhost:3000/api/all_snacks');
	return { posts: data };
};

export default Faves;
