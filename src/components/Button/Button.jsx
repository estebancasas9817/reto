import React from 'react';
import Icons from '../Icons/Icons';
import PropTypes from 'prop-types';

import './Button.css';
const Button = (props) => {
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
Button.propTypes = {
	className: PropTypes.node,
	name: PropTypes.node,
	iconWidth: PropTypes.node,
	styles: PropTypes.node,
	voteId: PropTypes.node,
	handlerButtonClick: PropTypes.func,
};
export default Button;
