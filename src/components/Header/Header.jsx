import React from 'react';
import './Header.css';
import { cardInfo } from '../../utils/constants/card.constants';
const Header = () => {
	return (
		<header className='header'>
			<nav className='nav' role='navigation'>
				<div className='nav__logo'>
					<h1 className='nav__logo-title'>Rule of thumb.</h1>
				</div>
				<ul className='nav__list'>
					<li className='nav__item'>
						<a href='#' className='nav__link'>
							Past Trials
						</a>
					</li>
					<li className='nav__item'>
						<a href='#' className='nav__link'>
							How It Works
						</a>
					</li>
					<li className='nav__item'>
						<a href='#' className='nav__link'>
							Login / Sign Up
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
