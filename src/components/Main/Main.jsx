import React, { useContext, useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import DropdowMenu from '../DropdownMenu/DropdowMenu';
import Wrapper from '../Wrapper/Wrapper';
import CardList from '../CardList/CardList';
import CardItem from '../CardItem/CardItem';
import './Main.css';
import Footer from '../Footer/Footer';
import RectangularBanner from '../RectangularBanner/RectangularBanner';
import ProgressBar from '../ProgressBar/ProgressBar';
import fetchData from '../../utils/apis/cardItem.api';
import { UserContext } from '../../contexts/UserProvider';
import monthsBtwnDates from '../../utils/helpers/monthsBtwnDates';
const Main = () => {
	const [user, dispatch] = useContext(UserContext);
	useEffect(() => {
		fetchData().then((item) => {
			dispatch({ type: 'fetch', payload: item });
		});
	}, []);

	const newItems = JSON.parse(JSON.stringify(user));
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

	const onIncrement = () => {
		dispatch({ type: 'increment' });
	};

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
						<CardItem item={item} onIncrement={onIncrement} />
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
