import classNames from 'classnames';

const cardItemStyles = (props) => {
	const cardStyles = {
		cardItem: classNames({
			cardItem: props.itemType === 'Grid',
			cardItemList: props.itemType !== 'Grid',
		}),
		cardImg: classNames({
			card__img: props.itemType === 'Grid',
			card__imgList: props.itemType !== 'Grid',
		}),
		cardItemContainer: classNames({
			cardItem__container: props.itemType === 'Grid',
			cardItem__container_list: props.itemType !== 'Grid',
		}),
		cardItemTittle: classNames({
			cardItem__title: props.itemType === 'Grid',
			cardItem__title_List: props.itemType !== 'Grid',
		}),
		cardItemDesc: classNames({
			cardIitem__desc: props.itemType === 'Grid',
			cardItem__desc_List: props.itemType !== 'Grid',
		}),
		cardItemEntertain: classNames({
			cardIitem__enterntainment: props.itemType === 'Grid',
			cardItem__enterntainment_List: props.itemType !== 'Grid',
		}),
		buttonBox: classNames({
			button__box: props.itemType === 'Grid',
			button__box_List: props.itemType !== 'Grid',
		}),
	};
	return cardStyles;
};

export { cardItemStyles };
