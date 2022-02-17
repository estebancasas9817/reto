import React from 'react';
import './ProgressBar.css';
const ProgressBar = () => {
	return (
		<div className='progressBar'>
			<div className='progressBar__left'>
				<span>25.5%</span>
			</div>
			<div className='progressBar__right'>
				<span>74.5%</span>
			</div>
		</div>
	);
};

export default ProgressBar;
