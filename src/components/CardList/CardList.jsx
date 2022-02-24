import React from 'react';
import './CardList.css';
import PropTypes from 'prop-types';
const CardList = (props) => {
	const styles = props.className;
	return <div className={styles}>{props.children}</div>;
};
CardList.propTypes = {
	children: PropTypes.node,
	className: PropTypes.node,
};
export default CardList;
