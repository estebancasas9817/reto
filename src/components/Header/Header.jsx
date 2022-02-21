import React from 'react';
import './Header.css';
const Header = (props) => {
	const { header, filteredLogo } = props;
	return (
		<header className='header'>
			<nav className='nav' role='navigation'>
				<div className='nav__logo'>
					<h1 className='nav__logo-title'>{filteredLogo}</h1>
				</div>
				<ul className='nav__list'>
					{header.map((title) => (
						<li className='nav__item' key={title.id}>
							<a href='#' className='nav__link'>
								{title.title}
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
