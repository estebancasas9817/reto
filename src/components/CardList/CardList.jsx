import React from 'react';
import './CardList.css';
import PropTypes from 'prop-types';
const CardList = (props) => {
	// cardList list
	return (
		<div
			className={`${
				props.itemType === 'Grid' ? 'cardList-grid' : 'card-list'
			} `}
		>
			{props.children}
		</div>
	);
};
CardList.propTypes = {
	children: PropTypes.node,
	className: PropTypes.node,
	itemType: PropTypes.node,
};
export default CardList;
