import React from 'react';
import './ProgressBar.css';
const ProgressBar = (props) => {
	const { votes } = props;
	const positive = Math.round(
		(votes.positive * 100) / (votes.positive + votes.negative)
	).toFixed(2);
	const negative = Math.round(
		(votes.negative * 100) / (votes.positive + votes.negative)
	).toFixed(2);
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
