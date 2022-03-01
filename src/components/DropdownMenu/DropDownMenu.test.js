import { render, screen, fireEvent } from '@testing-library/react';
import DropDownMenu from './DropdowMenu';
import React from 'react';
test('DropDown when click change to List', () => {
	render(<DropDownMenu itemType='Grid' />);
	const menu = screen.getbyText('Grid');
	fireEvent.click(menu);
	expect(menu.textContent).toBe('List');
});
