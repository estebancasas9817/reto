import React from 'react';
import PropTypes from 'prop-types';

import './ButtonVote.css';
import classNames from 'classnames';
const ButtonVote: React.FC<{
	handlerChildClick: (userId: number, iconId: number) => void;
	userId: number;
	iconId: number;
	disable: boolean;
	voteAgain: boolean;
	voteText: string;
	handlerButtonVoteClick: () => void;
}> = (props) => {
	const styles = classNames({
		btn__vote_disable: props.disable,
		btn__vote_enable: !props.disable,
	});
	const handlerClick = () => {
		if (!props.voteAgain) {
			props.handlerChildClick(props.userId, props.iconId);
		}
		props.handlerButtonVoteClick();
	};
	return (
		<button
			className={`btn__vote ${styles}`}
			disabled={props.disable}
			onClick={handlerClick}
		>
			{props.voteText}
		</button>
	);
};

export default ButtonVote;
