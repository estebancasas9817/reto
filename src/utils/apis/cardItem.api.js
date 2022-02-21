const API_CARD_ITEM = 'http://localhost:4000/card';
const fetchData = async () => {
	const res = await fetch(API_CARD_ITEM);
	const data = await res.json();
	return data;
};
export default fetchData;
