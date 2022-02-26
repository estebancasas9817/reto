import React, { useState } from 'react';
import ButtonVote from '../Button-Vote/ButtonVote';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import './CardItem.css';
import { cardItemStyles } from '../../utils/classes/cardItem';
const CardItem = (props) => {
	const [disable, setDisable] = useState(true);
	const [iconId, setIconId] = useState('');
	const [voteAgain, setVoteAgain] = useState(false);
	const { item, getVotes } = props;

	const { typeOfButton, iconName } = getVotes(
		item.votes.positive,
		item.votes.negative
	);
	const onIconId = (id) => {
		setIconId(id);
	};
	let enterntainmentText = `${item.lastUpdated} months in ${item.category}`;
	if (voteAgain) {
		enterntainmentText = 'Thank you for your vote!';
	}
	const cardStyles = cardItemStyles(props);
	const {
		cardItem,
		cardImg,
		cardItemContainer,
		cardItemTittle,
		cardItemDesc,
		cardItemEntertain,
		buttonBox,
	} = cardStyles;

	return (
		<div className={cardItem}>
			<img src={item.picture} alt='' width='100%' className={cardImg} />
			<div className={cardItemContainer}>
				<Button
					className={`button-width ${typeOfButton}`}
					iconWidth={16}
					name={iconName}
				/>
				<h1 className={cardItemTittle}>{item.name}</h1>
			</div>
			<p className={cardItemDesc}>{item.description}</p>
			<p className={cardItemEntertain}>{enterntainmentText}</p>
			<div className={buttonBox}>
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
	item: PropTypes.object,
	iconsObject: PropTypes.array,
	onChangeVotes: PropTypes.func,
	itemType: PropTypes.string,
	getVotes: PropTypes.func,
};

export default CardItem;
