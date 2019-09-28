import { render, cleanup } from '@testing-library/react';
import axios from 'axios';
import AllSnacks from './../pages/all_snacks';
import React from 'react';

const response = {
	data : [
		{
			id        : 1,
			name      : 'test-1',
			country   : 'canada',
			photo     : 'test-photo',
			continent : 'north america'
		},
		{
			id        : 2,
			name      : 'test-2',
			country   : 'China',
			photo     : 'test-photo',
			continent : 'asia'
		}
	]
};

jest.mock('axios');

// Cleans up the virtual DOM after each test.
afterEach(cleanup);
describe('<AllSnacks />', () => {
	axios.mockImplementation(() => Promise.resolve(response));
	test('it renders', () => {
		render(<AllSnacks posts={response.data} />);
	});
});
