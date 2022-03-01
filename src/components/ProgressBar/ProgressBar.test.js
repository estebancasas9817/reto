import { render } from '@testing-library/react';
import ProgressBar from './ProgressBar';
import React from 'react';
import percentage from '../../utils/helpers/percentage';
test('Percentage fun return correct answers', () => {
	let votes = {
		positive: 23,
		negative: 36,
	};
	render(<ProgressBar votes={votes} />);
	expect(percentage(23, 59)).toBe(39.0);

	votes = {
		positive: 23,
		negative: 36,
	};
	render(<ProgressBar votes={votes} />);
	expect(percentage(36, 59)).toBe(61.0);
});
