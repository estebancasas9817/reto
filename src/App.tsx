import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Button from './components/Button/Button';
import ClosingBar from './components/ClosingBar/ClosingBar';
import Main from './components/Main/Main';
import { useState } from 'react';
import UserProvider from './contexts/UserProvider.tsx';
import { cardInfo } from './utils/constants/card.constants';
import React from 'react';
import useFetch from './components/hooks/useFetch';
import { getDaysBetween } from './utils/helpers/getDaysBetween';
function App() {
	const [isMobile, setIsMobile] = useState(false);
	const { myData: header } = useFetch('header');
	const filteredHeader: {} = header.filter((item) => item.id !== header.length);
	const filteredLogo: {} = header.reduce((acum, item) => {
		return item;
	}, 0);
	const daysToClose = getDaysBetween(new Date('03/15/2022'));
	const onIsMobile = () => {
		setIsMobile(!isMobile);
	};

	return (
		<div className='App'>
			<Header
				header={filteredHeader}
				filteredLogo={filteredLogo.title}
				onIsMobile={onIsMobile}
				isMobile={isMobile}
			/>
			<Wrapper className='hero__container'>
				<div className='featured-card'>
					<Card cardInfo={cardInfo} />
					<Wrapper className='button__container'>
						<Button
							className='button__width blueColor'
							iconWidth={32}
							name='thumbs-up'
						/>
						<Button
							className='button__width yellowColor'
							iconWidth={32}
							name='thumbs-down'
						/>
					</Wrapper>
				</div>
				<ClosingBar daysToClose={daysToClose} />
			</Wrapper>
			<UserProvider>
				<Main />
			</UserProvider>
		</div>
	);
}

export default App;
