import React from 'react';
import './CardList.css';
const CardList: React.FC<{ className: string }> = (props) => {
	const styles = props.className;
	return <div className={styles}>{props.children}</div>;
};

export default CardList;
