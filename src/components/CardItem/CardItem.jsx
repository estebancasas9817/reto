import React, { useState } from 'react';
import ButtonVote from '../Button-Vote/ButtonVote';
import Button from '../Button/Button';
import './CardItem.css';
const CardItem = (props) => {
	const [disable, setDisable] = useState(true);
	const [iconId, setIconId] = useState('');
	const [voteAgain, setVoteAgain] = useState(false);
	const { item } = props;
	let typeOfButton = '';
	let iconName = '';
	if (item.votes.positive > item.votes.negative) {
		typeOfButton = 'blueColor';
		iconName = 'thumbs-up';
	} else {
		typeOfButton = 'yellowColor';
		iconName = 'thumbs-down';
	}
	const onIconId = (id) => {
		setIconId(id);
	};
	let enterntainmentText = `${item.lastUpdated} months in ${item.category}`;
	if (voteAgain) {
		enterntainmentText = 'Thank you for your vote!';
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
			<p className='card-item__enterntainment'>{enterntainmentText}</p>
			<div className='button__box'>
				{!voteAgain &&
					props.iconsObject.map((icon) => (
						<Button
							key={icon.id}
							iconWidth='16'
							className='button-width'
							styles={icon.style}
							name={icon.name}
							voteId={icon.id}
							setDisable={setDisable}
							onIconId={onIconId}
						/>
					))}

				<ButtonVote
					disable={disable}
					iconId={iconId}
					userId={item.id}
					onChangeVotes={props.onChangeVotes}
					setDisable={setDisable}
					setVoteAgain={setVoteAgain}
					voteAgain={voteAgain}
				/>
			</div>
		</div>
	);
};

export default CardItem;
