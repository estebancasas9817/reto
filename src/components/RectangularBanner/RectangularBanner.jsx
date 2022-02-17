import React from 'react';
import ButtonVote from '../Button-Vote/ButtonVote';
import './RectangularBanner.css';
const RectangularBanner = () => {
	return (
		<div className='banner-box'>
			<p className='banner__title'>
				Is there anyone else you would want us to add?
			</p>
			<ButtonVote />
		</div>
	);
};

export default RectangularBanner;
