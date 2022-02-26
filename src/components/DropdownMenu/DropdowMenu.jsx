import React, { useState } from 'react';
import DropDownItem from '../DropDownItem/DropDownItem';
import PropTypes from 'prop-types';

import './DropDownMenu.css';
const DropdowMenu = (props) => {
	const [dropDown, setDropDown] = useState(false);

	const openCloseMenu = () => {
		setDropDown(!dropDown);
	};

	return (
		<div className='dropDownMenu'>
			<p className='dropDownTitle' onClick={openCloseMenu}>
				{props.itemType} <span className='openDropDown'>&#9660;</span>
			</p>
			{dropDown && (
				<ul>
					<DropDownItem
						onItemChange={props.onItemChange}
						openCloseMenu={openCloseMenu}
					>
						List
					</DropDownItem>
					<DropDownItem
						onItemChange={props.onItemChange}
						openCloseMenu={openCloseMenu}
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
