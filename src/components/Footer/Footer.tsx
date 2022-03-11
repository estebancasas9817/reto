import React from 'react';

import './Footer.css';
import Icons from '../Icons/Icons';
const Footer: React.FC<{
	footer: { id: number; title: string }[];
	footerIcons: { id: number; name: string; iconWidth: string }[];
}> = (props) => {
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

export default Footer;
