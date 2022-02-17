import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import DropdowMenu from '../DropdownMenu/DropdowMenu';
import Wrapper from '../Wrapper/Wrapper';
import CardList from '../CardList/CardList';
import CardItem from '../CardItem/CardItem';
import './Main.css';
import Footer from '../Footer/Footer';
import RectangularBanner from '../RectangularBanner/RectangularBanner';
const Main = () => {
	const [items, setItems] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch('http://localhost:4000/card');
			const data = await res.json();
			setItems(data.data);
		};
		fetchData();
	}, []);
	return (
		<div className='main'>
			<Banner />
			<Wrapper className='flex'>
				<h1>Previous Rulings</h1>
				<DropdowMenu />
			</Wrapper>
			<CardList>
				{items.map((item) => (
					<CardItem key={item.id} items={item} />
				))}
			</CardList>
			<RectangularBanner />
			<hr></hr>
			<Footer />
		</div>
	);
};

export default Main;
