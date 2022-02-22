import React from 'react';
import './Card.css';
const Card = (props) => {
	const { heading, title, description, information, subTitle } = props.cardInfo;
	return (
		<div className='card'>
			<p className='card__hairline'>{heading}</p>
			<h2 className='card__title'>{title}</h2>
			<p className='card__desc'>{description}</p>
			<h4 className='card__more-info'>{information}</h4>
			<p className='card__cta'>{subTitle}</p>
		</div>
	);
};

export default Card;
