import React from 'react';
import Icons from '../Icons/Icons';

import './Button.css';
const Button: React.FC<{
	className: string;
	name: string;
	iconWidth: number;
	voteId: number;
	styles: string;
	handlerButtonClick: (voteId: number) => void;
}> = (props) => {
	const styles = props.className;
	const handlerClick = () => {
		props.handlerButtonClick(props.voteId);
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
