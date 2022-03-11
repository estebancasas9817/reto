import React, { useState } from 'react';
import ButtonVote from '../Button-Vote/ButtonVote';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import './CardItem.css';
import { CardStyles } from '../../utils/classes/cardItem';
const CardItem: React.FC<{
	item: {
		votes: { positive: number; negative: number };
		lastUpdated: number;
		category: string;
		description: string;
		id: number;
		picture: string;
		name: string;
	};
	itemType: string;
	typeOfButton: string;
	iconName: string;
	iconWidth: string;
	iconsObject: [
		{
			name: string;
			id: number;
			style: string;
		}
	];
	handlerChildClick: (id: number, type: number) => void;
	getVotes: (
		positive: number,
		negative: number
	) => { typeOfButton: string; iconName: string };
}> = (props) => {
	const [isDisable, setIsDisable] = useState(true);
	const [iconId, setIconId] = useState(0);
	const [voteAgain, setVoteAgain] = useState(false);
	const [voteText, setVotetext] = useState('Vote Now');
	const { item, getVotes } = props;

	const { typeOfButton, iconName } = getVotes(
		item.votes.positive,
		item.votes.negative
	);

	let enterntainmentText = `${item.lastUpdated} months in ${item.category}`;
	if (voteAgain) {
		enterntainmentText = 'Thank you for your vote!';
	}

	const handlerButtonClick = (id: number) => {
		setIsDisable(!isDisable);
		setIconId(id);
	};
	const handlerButtonVoteClick = () => {
		if (!voteAgain) {
			setVotetext('Vote Again');
		} else {
			setIsDisable(true);
			setVotetext('Vote Now');
		}
		setVoteAgain(!voteAgain);
	};

	return (
		<CardStyles grid>
			<img src={item.picture} alt='pictures' width='100%' />
			<div className='cardItemContainer'>
				<Button
					className={`button-width ${typeOfButton}`}
					iconWidth={16}
					name={iconName}
				/>
				<h1 className='cardItemTittle'>{item.name}</h1>
			</div>
			<p className='cardItemDesc'>{item.description}</p>
			<p className='cardItemEntertain'>{enterntainmentText}</p>
			<div className='buttonBox'>
				{!voteAgain &&
					props.iconsObject.map((icon) => (
						<Button
							key={icon.id}
							iconWidth={16}
							className='button-width'
							styles={icon.style}
							name={icon.name}
							voteId={icon.id}
							handlerButtonClick={handlerButtonClick}
						/>
					))}

				<ButtonVote
					disable={isDisable}
					iconId={iconId}
					userId={item.id}
					handlerChildClick={props.handlerChildClick}
					setDisable={setIsDisable}
					setVoteAgain={setVoteAgain}
					voteText={voteText}
					voteAgain={voteAgain}
					handlerButtonVoteClick={handlerButtonVoteClick}
				/>
			</div>
		</CardStyles>
	);
};

export default CardItem;
