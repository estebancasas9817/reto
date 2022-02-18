import React from 'react';
import ButtonVote from '../Button-Vote/ButtonVote';
import Button from '../Button/Button';
import './CardItem.css';
const CardItem = (props) => {
	const { item } = props;
	return (
		<div className='card-item'>
			<img src={item.picture} alt='' width='100%' className='card__img' />
			<div className='card-item__container'>
				<Button className='button-width yellowColor' iconWidth={16} />
				<h1 className='card-item__title'>{item.name}</h1>
			</div>
			<p className='card-item__desc'>{item.description}</p>
			<p className='card-item__enterntainment'>{`${item.lastUpdated} months in ${item.category}`}</p>
			<div className='button__box'>
				<Button
					className='button-width blueColor'
					iconWidth={16}
					thumb={true}
				/>
				<Button
					className='button-width yellowColor'
					iconWidth={16}
					thumb={false}
				/>
				<ButtonVote />
			</div>
		</div>
	);
};

export default CardItem;
