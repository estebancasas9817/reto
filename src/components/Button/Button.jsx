import React from 'react';
import ThumbDown from '../Icons/Thumb-Down';
import ThumbUp from '../Icons/Thumb-Up';
import './Button.css';
const Button = (props) => {
	const styles = props.className;
	const handlerClick = () => {
		props.onIncrement();
	};
	return (
		<button className={styles} onClick={handlerClick}>
			{props.thumb && <ThumbUp iconWidth={props.iconWidth} />}
			{!props.thumb && <ThumbDown iconWidth={props.iconWidth} />}
		</button>
	);
};

export default Button;
