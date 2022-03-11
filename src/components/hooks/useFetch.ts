import { useEffect, useState } from 'react';
import URL from '../../utils/apis/api';
const useFetch = (type: string) => {
	const [myData, setMyData] = useState([]);
	const finalUrl = URL + type;
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(finalUrl);
			const data = await res.json();
			setMyData(data);
		};
		fetchData();
	}, [finalUrl]);

	return { myData };
};
export default useFetch;
