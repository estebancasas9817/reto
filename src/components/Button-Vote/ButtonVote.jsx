import React, { useState } from 'react';
import './ButtonVote.css';
const ButtonVote = (props) => {
	const styles = `btn__vote ${props.disable}`;
	const [voteText, setVotetext] = useState('Vote Now');
	const handlerClick = () => {
		if (!props.voteAgain) {
			setVotetext('Vote Again');
			props.onChangeVotes(props.userId, props.iconId);
			props.setVoteAgain(true);
		} else {
			props.setDisable(true);
			setVotetext('Vote Now');
			props.setVoteAgain(false);
		}
	};
	return (
		<button className={styles} disabled={props.disable} onClick={handlerClick}>
			{voteText}
		</button>
	);
};

export default ButtonVote;
