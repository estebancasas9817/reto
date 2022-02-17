import React from 'react';
import ButtonVote from '../Button-Vote/ButtonVote';
import Button from '../Button/Button';
import ProgressBar from '../ProgressBar/ProgressBar';
import './CardItem.css';
const CardItem = (props) => {
	const { items } = props;

	const styles = 'card-item__container ';
	console.log(items.picture);
	return (
		<div className='card-item'>
			<img src={items.picture} alt='' width='100%' className='card__img' />
			<div className='card-item__container'>
				<Button className='button-width' />
				<h1 className='card-item__title'>{items.name}</h1>
			</div>
			<p className='card-item__desc'>{items.description}</p>
			<p className='card-item__enterntainment'>1 month ago in Entertainment</p>
			<div className='button__box'>
				<Button className='button-width' />
				<Button className='button-width' />
				<ButtonVote />
			</div>
			<ProgressBar />
		</div>
	);
};

export default CardItem;
