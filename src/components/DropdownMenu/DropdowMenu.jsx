import React, { useState } from 'react';
import DropDownItem from '../DropDownItem/DropDownItem';
import './DropDownMenu.css';
const DropdowMenu = () => {
	const [dropDown, setDropDown] = useState(false);
	const [itemType, setItemType] = useState('Grid');

	const openCloseMenu = () => {
		setDropDown(!dropDown);
	};
	const onItemChange = (type) => {
		setItemType(type);
	};
	return (
		<div className='dropDownMenu'>
			<p className='dropDownTitle' onClick={openCloseMenu}>
				{itemType} <span className='openDropDown'>&#9660;</span>
			</p>
			{dropDown && (
				<ul>
					<DropDownItem
						onItemChange={onItemChange}
						openCloseMenu={openCloseMenu}
					>
						List
					</DropDownItem>
					<DropDownItem
						onItemChange={onItemChange}
						openCloseMenu={openCloseMenu}
					>
						Grid
					</DropDownItem>
				</ul>
			)}
		</div>
	);
};

export default DropdowMenu;
