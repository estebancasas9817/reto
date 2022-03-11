import React, { useState } from 'react';
import DropDownItem from '../DropDownItem/DropDownItem';
import PropTypes from 'prop-types';
import './DropDownMenu.css';
const DropdowMenu = (props) => {
	const [IsdropDown, setIsDropDown] = useState(false);

	const toggleMenu = () => {
		setIsDropDown(!IsdropDown);
	};

	return (
		<div className='dropDownMenu'>
			<p className='dropDownTitle' onClick={toggleMenu}>
				{props.itemType} <span className='openDropDown'>&#9660;</span>
			</p>
			{IsdropDown && (
				<ul>
					<DropDownItem
						onItemChange={props.onItemChange}
						toggleMenu={toggleMenu}
					>
						List
					</DropDownItem>
					<DropDownItem
						onItemChange={props.onItemChange}
						toggleMenu={toggleMenu}
					>
						Grid
					</DropDownItem>
				</ul>
			)}
		</div>
	);
};
DropdowMenu.propTypes = {
	itemType: PropTypes.string,
	onItemChange: PropTypes.func,
};

export default DropdowMenu;
