import classNames from 'classnames';

const cardItemStyles = (itemType: string) => {
	const cardStyles = {
		cardItem: classNames({
			cardItem: itemType === 'Grid',
			cardItemList: itemType !== 'Grid',
		}),
		cardImg: classNames({
			card__img: itemType === 'Grid',
			card__imgList: itemType !== 'Grid',
		}),
		cardItemContainer: classNames({
			cardItem__container: itemType === 'Grid',
			cardItem__container_list: itemType !== 'Grid',
		}),
		cardItemTittle: classNames({
			cardItem__title: itemType === 'Grid',
			cardItem__title_List: itemType !== 'Grid',
		}),
		cardItemDesc: classNames({
			cardIitem__desc: itemType === 'Grid',
			cardItem__desc_List: itemType !== 'Grid',
		}),
		cardItemEntertain: classNames({
			cardIitem__enterntainment: itemType === 'Grid',
			cardItem__enterntainment_List: itemType !== 'Grid',
		}),
		buttonBox: classNames({
			button__box: itemType === 'Grid',
			button__box_List: itemType !== 'Grid',
		}),
	};
	return cardStyles;
};

export { cardItemStyles };
