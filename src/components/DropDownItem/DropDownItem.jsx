import React from 'react';
import './DropDownItem.css';

const DropDownItem = (props) => {
	const handdlerClick = () => {
		props.onItemChange(props.children);
		props.openCloseMenu();
	};
	return (
		<li className='dropDownItem' onClick={handdlerClick}>
			{props.children}
		</li>
	);
};

export default DropDownItem;
