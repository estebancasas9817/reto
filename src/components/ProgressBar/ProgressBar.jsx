import React from 'react';
import percentage from '../../utils/helpers/percentage';
import './ProgressBar.css';
const ProgressBar = (props) => {
	const { votes } = props;
	const positive = percentage(votes.positive, votes.negative, true);
	const negative = percentage(votes.positive, votes.negative, false);
	return (
		<div className='progressBar'>
			<div className='progressBar__left' style={{ flexBasis: `${positive}%` }}>
				<span>{`${positive}%`}</span>
			</div>
			<div className='progressBar__right' style={{ flexBasis: `${negative}%` }}>
				<span>{`${negative}%`}</span>
			</div>
		</div>
	);
};

export default ProgressBar;
