import React from 'react';
import PropTypes from 'prop-types';

import './Footer.css';
import Icons from '../Icons/Icons';
const Footer = (props) => {
	const { footer } = props;
	return (
		<footer className='footer'>
			<div className='footer__links'>
				<ul>
					{footer.map((item) => (
						<li key={item.id}>
							<a href=''>{item.title}</a>
						</li>
					))}
				</ul>
			</div>
			<div className='footer__social'>
				<span>Follow us</span>
				<ul>
					{props.footerIcons.map((icon) => (
						<li key={icon.id}>
							<a href=''>
								<Icons name={icon.name} iconWidth={icon.iconWidth} />
							</a>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
};
Footer.propTypes = {
	footer: PropTypes.array,
	footerIcons: PropTypes.array,
};
export default Footer;
