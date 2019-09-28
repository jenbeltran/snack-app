import { render, cleanup } from '@testing-library/react';
import axios from 'axios';
import Oceania from './../pages/oceania';
import React from 'react';

const response = {
	data : [
		{
			id        : 1,
			name      : 'test-1',
			country   : 'test-country',
			photo     : 'test-photo',
			continent : 'test-continent'
		},
		{
			id        : 2,
			name      : 'test-2',
			country   : 'test-country',
			photo     : 'test-photo',
			continent : 'test-continent'
		}
	]
};

jest.mock('axios');

// Cleans up the virtual DOM after each test.
afterEach(cleanup);
describe('<Oceania />', () => {
	axios.mockImplementation(() => Promise.resolve(response));
	test('it renders', () => {
		render(<Oceania posts={response.data} />);
	});
});
