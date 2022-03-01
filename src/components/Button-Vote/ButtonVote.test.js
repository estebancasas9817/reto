import { render, screen, fireEvent } from '@testing-library/react';
import ButtonVote from './ButtonVote';
import React from 'react';
test('Button starts out disabled', () => {
	const voteText = 'Vote Now';
	render(<ButtonVote voteText={voteText} disable={true} />);
	const btnVote = screen.getByRole('button', { name: 'Vote Now' });
	expect(btnVote).toBeDisabled();
});

test('Button when clicked change text to Vote Now', () => {
	const voteText = 'Vote Again';
	render(<ButtonVote voteText={voteText} disable={false} />);
	const btnVote = screen.getByRole('button', { name: 'Vote Again' });
	fireEvent.click(btnVote);
	expect(btnVote).toHaveTextContent('Vote Again');
});

test('Button when clicked change background Color', () => {
	render(<ButtonVote disable={true} />);
	const btnVote = screen.getByRole('button');
	expect(btnVote).toHaveStyle('background-color: #30303099');
	fireEvent.click(btnVote);

	expect(btnVote).toHaveStyle({ backgroundColor: '#00000099' });
});
