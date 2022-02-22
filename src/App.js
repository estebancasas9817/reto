import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Button from './components/Button/Button';
import ClosingBar from './components/ClosingBar/ClosingBar';
import Main from './components/Main/Main';
import { useEffect, useState } from 'react';
import fetchHeader from './utils/apis/header.api';
import UserProvider from './contexts/UserProvider';
import { cardInfo } from './utils/constants/card.constants';
function App() {
	const [header, setHeader] = useState([]);
	useEffect(() => {
		fetchHeader().then((headerItems) => {
			setHeader(headerItems);
		});
	}, []);

	const filteredHeader = header.filter((item) => item.id !== header.length);
	const filteredLogo = header.reduce((acum, item) => {
		return item.title;
	}, 0);

	return (
		<div className='App'>
			<Header header={filteredHeader} filteredLogo={filteredLogo} />
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
				<ClosingBar />
			</Wrapper>
			<UserProvider>
				<Main />
			</UserProvider>
		</div>
	);
}

export default App;
