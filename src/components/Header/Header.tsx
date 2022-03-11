import React from 'react';
import className from 'classnames';
import './Header.css';
const Header: React.FC<{
	header: { id: number; title: string }[];
	isMobile: boolean;
	filteredLogo: string;
	onIsMobile: () => void;
}> = (props) => {
	const { header, filteredLogo } = props;

	const navStyles = className({
		nav__list: !props.isMobile,
		nav__list_mobile: props.isMobile,
	});

	const navItemStyles = className({
		nav__item: !props.isMobile,
		nav__item_mobile: props.isMobile,
	});
	const topLine = className({
		top__line_mobile: props.isMobile,
		top__line: !props.isMobile,
	});

	const middleLine = className({
		middle__line_mobile: props.isMobile,
		middle__line: !props.isMobile,
	});

	const bottomLine = className({
		bottom__line_mobile: props.isMobile,
		bottom__line: !props.isMobile,
	});

	const handlerClick = (): void => {
		props.onIsMobile();
	};
	return (
		<header className='header'>
			<nav className='nav' role='navigation'>
				<div className='nav__logo'>
					<h1 className='nav__logo-title'>{filteredLogo}</h1>
				</div>
				<ul className={navStyles} onClick={handlerClick}>
					{header.map((title) => (
						<li className={navItemStyles} key={title.id}>
							<a href='#' className='nav__link'>
								{title.title}
							</a>
						</li>
					))}

					<a href='#' className='toggle-button' onClick={handlerClick}>
						<span className={`bar ${topLine}`}></span>
						<span className={`bar ${middleLine}`}></span>
						<span className={`bar ${bottomLine}`}></span>
					</a>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
