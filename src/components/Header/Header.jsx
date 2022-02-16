import React from 'react';
import './Header.css';
import { headerTitles } from '../../utils/constants/header.constants';
import { logoTitle } from '../../utils/constants/header.constants';
const Header = () => {
	return (
		<header className='header'>
			<nav className='nav' role='navigation'>
				<div className='nav__logo'>
					<h1 className='nav__logo-title'>{logoTitle}</h1>
				</div>
				<ul className='nav__list'>
					{headerTitles.map((title) => (
						<li className='nav__item' key={title.id}>
							<a href='#' className='nav__link'>
								{title.name}
							</a>
						</li>
					))}
					<li className='nav__item'>
						<a href='' className='nav__link'></a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
