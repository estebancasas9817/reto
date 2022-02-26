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
import { UserContext } from '../../contexts/UserProvider';
import monthsBtwnDates from '../../utils/helpers/monthsBtwnDates';
import { iconsObject } from '../../utils/constants/icon.constants';
import useFetch from '../hooks/useFetch';
import API_FOOTER from '../../utils/apis/footer.api';
import API_CARD_ITEM from '../../utils/apis/cardItem.api';
import { TYPES } from '../../contexts/userReducer';
import classNames from 'classnames';
import { getVotes } from '../../utils/helpers/getVotes';
const Main = () => {
	const [user, dispatch] = useContext(UserContext);
	const [itemType, setItemType] = useState('Grid');
	const { myData: footer } = useFetch(API_FOOTER);
	const { myData: cardInfo } = useFetch(API_CARD_ITEM);

	useEffect(() => {
		dispatch({ type: TYPES.fetch, payload: cardInfo });
	}, [dispatch, cardInfo]);

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
			dispatch({ type: TYPES.increment, payload: id });
		} else {
			dispatch({ type: TYPES.decrement, payload: id });
		}
	};

	const onItemChange = (type) => {
		setItemType(type);
	};
	const cardStyles = classNames({
		cardList_grid: itemType === 'Grid',
		card_list: itemType === 'List',
	});

	return (
		<div className='main'>
			<Banner />
			<Wrapper className='flex'>
				<h1>Previous Rulings</h1>
				<DropdowMenu onItemChange={onItemChange} itemType={itemType} />
			</Wrapper>
			<CardList className='horizontal__slider'>
				<div className={cardStyles}>
					{arr.map((item) => (
						<div className='item__container' key={item.id}>
							<CardItem
								item={item}
								onChangeVotes={onChangeVotes}
								iconsObject={iconsObject}
								itemType={itemType}
								getVotes={getVotes}
							/>
							<ProgressBar votes={item.votes} />
						</div>
					))}
				</div>
			</CardList>
			<RectangularBanner />
			<hr></hr>
			<Footer footer={footer} />
		</div>
	);
};

export default Main;
