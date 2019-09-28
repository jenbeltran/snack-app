import { render, cleanup } from '@testing-library/react';
import axios from 'axios';
import Asia from './../pages/asia';
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
describe('<Asia />', () => {
	axios.mockImplementation(() => Promise.resolve(response));
	test('it renders', () => {
		render(<Asia posts={response.data} />);
	});
});
