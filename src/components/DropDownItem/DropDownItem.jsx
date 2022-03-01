import React from 'react';
import PropTypes from 'prop-types';

import './DropDownItem.css';

const DropDownItem = (props) => {
	const handdlerClick = () => {
		props.onItemChange(props.children);
		props.toggleMenu();
	};
	return (
		<li className='dropDownItem' onClick={handdlerClick}>
			{props.children}
		</li>
	);
};
DropDownItem.propTypes = {
	children: PropTypes.node,
	onItemChange: PropTypes.node,
	toggleMenu: PropTypes.node,
};
export default DropDownItem;
