import mockAxios from 'axios';
import allSnacks from '../pages/all_snacks';

it('fetches data from unsplash', async () => {
	// setup
	mockAxios.get.mockImplementationOnce(() =>
		Promise.resolve({
			data : {
				id        : 1,
				name      : 'Coffee Crisp',
				country   : 'United Kingdom',
				continent : 'Europe',
				photo     :
					'https://americanfizz.co.uk/image/cache/catalog/canadian-products/coffee-crisp/nestle-coffee-crisp-50g-48ct-800x800.png',
				favourite : 1
			}
		})
	);

	// work
	const snackInfo = await allSnacks('snacks');

	// expect
	expect(snackInfo.name).toEqual('Coffee Crisp');
	expect(mockAxios.get).toHaveBeenCalledTimes(1);
	expect(mockAxios.get).toHaveBeenCalledWith('http://localhost:3000/api/all_snacks');
});
