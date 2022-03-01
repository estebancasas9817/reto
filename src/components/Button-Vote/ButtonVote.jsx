import React from 'react';
import PropTypes from 'prop-types';

import './ButtonVote.css';
import classNames from 'classnames';
const ButtonVote = (props) => {
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
ButtonVote.propTypes = {
	disable: PropTypes.bool,
	handlerChildClick: PropTypes.func,
	voteAgain: PropTypes.bool,
	userId: PropTypes.number,
	iconId: PropTypes.number,
	voteText: PropTypes.string,
	handlerButtonVoteClick: PropTypes.func,
};
export default ButtonVote;
