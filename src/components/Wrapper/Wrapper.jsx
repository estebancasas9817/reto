import React from 'react';
import './Wrapper.css';
const Wrapper = (props) => {
	const styles = props.className;
	return <div className={styles}>{props.children}</div>;
};

export default Wrapper;
