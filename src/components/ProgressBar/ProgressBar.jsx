import React from 'react';
import PropTypes from 'prop-types';

import percentage from '../../utils/helpers/percentage';
import './ProgressBar.css';
import Icons from '../Icons/Icons';
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
ProgressBar.propTypes = {
	votes: PropTypes.node,
};
export default ProgressBar;
