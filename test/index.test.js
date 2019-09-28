import { render, fireEvent, cleanup, wait } from '@testing-library/react';
import React from 'react';
const fetch = require('node-fetch');
import '@testing-library/jest-dom/extend-expect';
import SearchSnackResults from './../pages/index';

jest.mock('node-fetch');

const response = {
	json() {
		return JSON.parse(this.body);
	},

	body : JSON.stringify([
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
	])
};

afterEach(cleanup);
describe('<SearchSnackResults />', () => {
	test('It renders', () => {
		render(<SearchSnackResults />);
	});

	test('It has an input the user can type into', () => {
		const { getByLabelText } = render(<SearchSnackResults />);
		const input = getByLabelText('Search Snack');
		fireEvent.change(input, { target: { value: 'test123' } });
		expect(input).toHaveValue('test123');
	});

	test('user should be able to submit a form and render the results', async () => {
		const { getByLabelText, getByTestId, container } = render(<SearchSnackResults />);
		fetch.mockImplementation(() => Promise.resolve(response));
		const input = getByLabelText('Search Snack');
		fireEvent.change(input, { target: { value: 'test' } });
		expect(input).toHaveValue('test');

		fireEvent.click(getByTestId('submit-button'));

		await wait(() => {
			expect(getByTestId('card-0')).toBeDefined();
		});
	});
});
