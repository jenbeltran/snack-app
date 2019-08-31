import axios from 'axios';

export default async (term) => {
	const response = await axios.get('http://localhost:3000/api/all_snacks');
	return response.data.results;
};
