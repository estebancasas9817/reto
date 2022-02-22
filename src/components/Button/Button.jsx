import React from 'react';
import Icons from '../Icons/Icons';

import './Button.css';
const Button = (props) => {
	const styles = props.className;
	const handlerClick = () => {
		props.onChangeVotes(props.userId, props.voteId);
	};
	return (
		<button className={`${styles} ${props.styles}`} onClick={handlerClick}>
			<Icons name={props.name} iconWidth={props.iconWidth} />
		</button>
	);
};

export default Button;
