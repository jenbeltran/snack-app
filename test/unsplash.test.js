import mockAxios from 'axios';
import unsplash from '../pages/unsplash';

it('fetches data from unsplash', async () => {
	// setup
	mockAxios.get.mockImplementationOnce(() =>
		Promise.resolve({
			data : { results: [ 'cat.jpg' ] }
		})
	);

	// work
	const images = await unsplash('cats');

	// expect
	expect(images).toEqual([ 'cat.jpg' ]);
	expect(mockAxios.get).toHaveBeenCalledTimes(1);
	expect(mockAxios.get).toHaveBeenCalledWith('http://localhost:3000/api/all_snacks');
});
