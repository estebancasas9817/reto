import React from 'react';
import './ClosingBar.css';
import PropTypes from 'prop-types';
const ClosingBar = (props) => {
	return (
		<div className='hero__closing-gauge'>
			<div className='closing-gauge__left'>
				<span className='closing-gauge__title'>closing in</span>
			</div>
			<div className='closing-gauge__right'>
				<span className='closing-gauge__number'>{props.daysToClose}</span>
				<span className='closing-gauge__desc'>days</span>
			</div>
		</div>
	);
};

ClosingBar.propTypes = {
	daysToClose: PropTypes.node,
};

export default ClosingBar;
