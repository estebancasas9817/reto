import React from 'react';
import Icons from '../Icons/Icons';

import './Button.css';
const Button = (props) => {
	const styles = props.className;
	const handlerClick = () => {
		if (props.setDisable) {
			props.setDisable(false);
			props.onIconId(props.voteId);
		}
	};
	return (
		<button
			className={`${styles} ${props.styles} btn__thumb`}
			onClick={handlerClick}
		>
			<Icons name={props.name} iconWidth={props.iconWidth} />
		</button>
	);
};

export default Button;
