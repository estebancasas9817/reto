import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Button from './components/Button/Button';
import ClosingBar from './components/ClosingBar/ClosingBar';
import Main from './components/Main/Main';
import { useEffect } from 'react';

function App() {
	useEffect(() => {
		const fetchCardnfo = async () => {
			const res = await fetch('');
			const data = await res.json();
		};
	});
	return (
		<div className='App'>
			<Header />
			<Wrapper className='hero__container'>
				<div className='featured-card'>
					<Card />
					<Wrapper className='button__container'>
						<Button className='button__width' />
						<Button className='button__width' />
					</Wrapper>
				</div>
				<ClosingBar />
			</Wrapper>
			<Main />
		</div>
	);
}

export default App;
