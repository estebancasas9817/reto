import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Button from './components/Button/Button';
import ClosingBar from './components/ClosingBar/ClosingBar';
import Main from './components/Main/Main';
import { useEffect } from 'react';

function App() {
	return (
		<div className='App'>
			<Header />
			<Wrapper className='hero__container'>
				<div className='featured-card'>
					<Card />
					<Wrapper className='button__container'>
						<Button
							className='button__width blueColor'
							iconWidth={32}
							thumb={true}
						/>
						<Button
							className='button__width yellowColor'
							iconWidth={32}
							thumb={false}
						/>
					</Wrapper>
				</div>
				<ClosingBar />
			</Wrapper>
			<Main />
		</div>
	);
}

export default App;
