import React from 'react';
import ButtonVote from '../Button-Vote/ButtonVote';
import Button from '../Button/Button';
import ProgressBar from '../ProgressBar/ProgressBar';
import './CardItem.css';
const CardItem = () => {
	return (
		<div className='card-item'>
			<div className='card-item__container'>
				<Button />
				<h1 className='card-item__title'>Kanye West</h1>
			</div>
			<p className='card-item__desc'>
				Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu
				velit…
			</p>
			<p className='card-item__enterntainment'>1 month ago in Entertainment</p>
			<div className='button__box'>
				<Button />
				<Button />
				<ButtonVote />
			</div>
			<ProgressBar />
		</div>
	);
};

export default CardItem;
