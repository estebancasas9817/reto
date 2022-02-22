import React, { useState } from 'react';
import percentage from '../../utils/helpers/percentage';
import ButtonVote from '../Button-Vote/ButtonVote';
import Button from '../Button/Button';
import './CardItem.css';
const CardItem = (props) => {
	const { item } = props;
	const positive = percentage(item.votes.positive, item.votes.negative, true);
	const negative = percentage(item.votes.positive, item.votes.negative, false);
	let typeOfButton = '';
	let iconName = '';
	if (positive > negative) {
		typeOfButton = 'blueColor';
		iconName = 'thumbs-up';
	} else {
		typeOfButton = 'yellowColor';
		iconName = 'thumbs-down';
	}

	return (
		<div className='card-item'>
			<img src={item.picture} alt='' width='100%' className='card__img' />
			<div className='card-item__container'>
				<Button
					className={`button-width ${typeOfButton}`}
					iconWidth={16}
					name={iconName}
				/>
				<h1 className='card-item__title'>{item.name}</h1>
			</div>
			<p className='card-item__desc'>{item.description}</p>
			<p className='card-item__enterntainment'>{`${item.lastUpdated} months in ${item.category}`}</p>
			<div className='button__box'>
				{props.iconsObject.map((icon) => (
					<Button
						key={icon.id}
						iconWidth='16'
						className='button-width'
						styles={icon.style}
						name={icon.name}
						onChangeVotes={props.onChangeVotes}
						userId={item.id}
						voteId={icon.id}
					/>
				))}

				<ButtonVote />
			</div>
		</div>
	);
};

export default CardItem;
