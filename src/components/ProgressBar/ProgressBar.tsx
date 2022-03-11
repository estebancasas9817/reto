import React from 'react';
import PropTypes from 'prop-types';
import percentage from '../../utils/helpers/percentage';
import './ProgressBar.css';
const ProgressBar = (props: {
	votes: { positive: number; negative: number };
}) => {
	const { votes } = props;
	const positive = percentage(votes.positive, votes.negative + votes.positive);
	const negative = percentage(votes.negative, votes.negative + votes.positive);
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
ProgressBar.propTypes = {
	votes: PropTypes.object,
};
export default ProgressBar;
