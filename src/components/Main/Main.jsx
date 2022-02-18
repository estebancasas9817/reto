import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import DropdowMenu from '../DropdownMenu/DropdowMenu';
import Wrapper from '../Wrapper/Wrapper';
import CardList from '../CardList/CardList';
import CardItem from '../CardItem/CardItem';
import './Main.css';
import Footer from '../Footer/Footer';
import RectangularBanner from '../RectangularBanner/RectangularBanner';
import ProgressBar from '../ProgressBar/ProgressBar';
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

	const monthsBtwnDates = (startDate, endDate) => {
		startDate = new Date(startDate);
		endDate = new Date(endDate);
		return Math.max(
			(endDate.getFullYear() - startDate.getFullYear()) * 12 +
				endDate.getMonth() -
				startDate.getMonth(),
			0
		);
	};

	const newItems = JSON.parse(JSON.stringify(items));
	const today = new Date();
	const date =
		today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
	const arr = newItems.map((item) => {
		if (item.lastUpdated) {
			item.lastUpdated = item.lastUpdated.slice(0, 10);
			item.lastUpdated = monthsBtwnDates(item.lastUpdated, date);
		}
		return item;
	});

	return (
		<div className='main'>
			<Banner />
			<Wrapper className='flex'>
				<h1>Previous Rulings</h1>
				<DropdowMenu />
			</Wrapper>
			<CardList>
				{arr.map((item) => (
					<div className='item__container' key={item.id}>
						<CardItem item={item} />
						<ProgressBar votes={item.votes} />
					</div>
				))}
			</CardList>
			<RectangularBanner />
			<hr></hr>
			<Footer />
		</div>
	);
};

export default Main;
