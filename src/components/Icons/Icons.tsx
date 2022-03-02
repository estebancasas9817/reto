import React from 'react';
import sprite from '../../assets/img/sprite.svg';
import PropTypes from 'prop-types';

const Icons = (props: { iconWidth: number; name: string }) => {
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
Icons.propTypes = {
	name: PropTypes.node,
	iconWidth: PropTypes.node,
};
export default Icons;
