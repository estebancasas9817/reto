import React from 'react';
import sprite from '../../assets/img/sprite.svg';
const Icons = (props) => {
	// const name = {`${Icons}#icon-${name}`};
	// console.log(props);
	return (
		<svg
			className='search__icon'
			width={props.iconWidth}
			height={props.iconWidth}
		>
			<use xlinkHref={`${sprite}#icon-${props.name}`}></use>
		</svg>
	);
};

export default Icons;
