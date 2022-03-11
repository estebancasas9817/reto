import React from 'react';
import PropTypes from 'prop-types';

import './Wrapper.css';
const Wrapper = (props) => {
	const styles = props.className;
	return <div className={styles}>{props.children}</div>;
};
Wrapper.propTypes = {
	children: PropTypes.node,
	className: PropTypes.node,
};
export default Wrapper;
