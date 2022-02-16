import React from 'react';
import ButtonVote from '../Button-Vote/ButtonVote';
import Button from '../Button/Button';
import ProgressBar from '../ProgressBar/ProgressBar';
import './CardItem.css';
const CardItem = () => {
	return (
		<div className='card-item'>
			<div>
				<Button />
				<h1>Kanye West</h1>
			</div>
			<p>
				Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu
				velit…
			</p>
			<p>1 month ago in Entertainment</p>
			<div>
				<Button />
				<Button />
				<ButtonVote />
			</div>
			<ProgressBar />
		</div>
	);
};

export default CardItem;
