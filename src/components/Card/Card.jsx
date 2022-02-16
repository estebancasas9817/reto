import React from 'react';
import Button from '../Button/Button';
import './Card.css';
const Card = () => {
	// <div className='button-container'>
	// 			<Button />
	// 			<Button />
	// 		</div>
	return (
		<div className='card'>
			<p className='card__hairline'>What's your opinion on</p>
			<h2 className='card__title'>Pope Francis</h2>
			<p className='card__desc'>
				He’s talking tough on clergy sexual abuse, or is he just another pervert
				protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs
				up)
			</p>
			<h4 className='card__more-info'>More Information</h4>
			<p className='card__cta'>What's Your veredict?</p>
		</div>
	);
};

export default Card;
