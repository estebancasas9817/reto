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
import { iconsObject } from '../../utils/constants/icon.constants';
import fetchFooter from '../../utils/apis/footer.api';

const Main = () => {
	const [user, dispatch] = useContext(UserContext);
	const [itemType, setItemType] = useState('Grid');
	const [footer, setFooter] = useState([]);

	useEffect(() => {
		fetchData().then((item) => {
			dispatch({ type: 'fetch', payload: item });
		});
	}, [dispatch]);

	useEffect(() => {
		fetchFooter().then((footerItems) => {
			setFooter(footerItems);
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

	const onChangeVotes = (id, type) => {
		if (type === 1) {
			dispatch({ type: 'increment', payload: id });
		} else {
			dispatch({ type: 'decrement', payload: id });
		}
	};

	const onItemChange = (type) => {
		setItemType(type);
	};
	return (
		<div className='main'>
			<Banner />
			<Wrapper className='flex'>
				<h1>Previous Rulings</h1>
				<DropdowMenu onItemChange={onItemChange} itemType={itemType} />
			</Wrapper>
			<CardList itemType={itemType}>
				{arr.map((item) => (
					<div className='item__container' key={item.id}>
						<CardItem
							item={item}
							onChangeVotes={onChangeVotes}
							iconsObject={iconsObject}
							itemType={itemType}
						/>
						<ProgressBar votes={item.votes} />
					</div>
				))}
			</CardList>
			<RectangularBanner />
			<hr></hr>
			<Footer footer={footer} />
		</div>
	);
};

export default Main;
