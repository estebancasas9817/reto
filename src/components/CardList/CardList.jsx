import React from 'react';
import './CardList.css';
import PropTypes from 'prop-types';
const CardList = (props) => {
	return <div className='cardList'>{props.children}</div>;
};
CardList.propTypes = {
	children: PropTypes.node,
};
export default CardList;
