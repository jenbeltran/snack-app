import axios from 'axios';
import { Container, CardColumns } from 'reactstrap';
import Cards from '../components/Cards';

const CentralAmerica = ({ posts }) => {
	return (
		<div>
			<Container>
				<h2>Central America</h2>
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

CentralAmerica.getInitialProps = async () => {
	const { data } = await axios.get('http://localhost:3000/api/central_america');
	return { posts: data };
};

export default CentralAmerica;
