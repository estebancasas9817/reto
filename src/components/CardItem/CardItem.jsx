import React, { useState } from 'react';
import ButtonVote from '../Button-Vote/ButtonVote';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
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
		<div
			className={`${
				props.itemType === 'Grid' ? 'card-item' : 'card-item-list'
			}`}
		>
			<img
				src={item.picture}
				alt=''
				width='100%'
				className={`${
					props.itemType === 'Grid' ? 'card__img' : 'card__img-list'
				}`}
			/>
			<div
				className={`${
					props.itemType === 'Grid'
						? 'card-item__container'
						: 'card-item__container-list'
				}`}
			>
				<Button
					className={`button-width ${typeOfButton}`}
					iconWidth={16}
					name={iconName}
				/>
				<h1
					className={`${
						props.itemType === 'Grid'
							? 'card-item__title'
							: 'card-item__title-list'
					}`}
				>
					{item.name}
				</h1>
			</div>
			<p
				className={`${
					props.itemType === 'Grid' ? 'card-item__desc' : 'card-item__desc-list'
				}`}
			>
				{item.description}
			</p>
			<p
				className={`${
					props.itemType === 'Grid'
						? 'card-item__enterntainment'
						: 'card-item__enterntainment-list'
				}`}
			>
				{enterntainmentText}
			</p>
			<div
				className={`${
					props.itemType === 'Grid' ? 'button__box' : 'button__box-list'
				}`}
			>
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

CardItem.propTypes = {
	item: PropTypes.node,
	iconsObject: PropTypes.node,
	onChangeVotes: PropTypes.node,
	itemType: PropTypes.node,
};

export default CardItem;
