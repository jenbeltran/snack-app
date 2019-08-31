import { shallow } from 'enzyme';
import React from 'react';
import AddSnack from '../pages/add_snack.js';

describe('show add snack page', () => {
	it('shows the input form', () => {
		const app = shallow(<AddSnack />);
		expect(app.find('h1').text()).toEqual('Add a Snack');
	});
});
