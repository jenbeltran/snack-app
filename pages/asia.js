import axios from 'axios';
import { Container, CardColumns } from 'reactstrap';
import Cards from '../static/components/Cards';

const Asia = ({ posts }) => {
	return (
		<div>
			<Container>
				<h1>Asia</h1>
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

Asia.getInitialProps = async () => {
	const { data } = await axios.get('http://localhost:3000/api/asia');
	return { posts: data };
};

export default Asia;
