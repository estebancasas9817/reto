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
					<li>
						<a href=''>
							<Icons name='facebook2' iconWidth='24px' />
						</a>
					</li>
					<li>
						<a href=''>
							<Icons name='twitter' iconWidth='24px' />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};
Footer.propTypes = {
	footer: PropTypes.array,
};
export default Footer;
