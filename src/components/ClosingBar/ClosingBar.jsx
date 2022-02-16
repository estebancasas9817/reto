import React from 'react';
import './ClosingBar.css';
const ClosingBar = () => {
	return (
		<div class='hero__closing-gauge'>
			<div class='closing-gauge__left'>
				<span class='closing-gauge__title'>closing in</span>
			</div>
			<div class='closing-gauge__right'>
				<span class='closing-gauge__number'>22</span>
				<span class='closing-gauge__desc'>days</span>
			</div>
		</div>
	);
};

export default ClosingBar;
