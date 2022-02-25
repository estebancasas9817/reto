import { useEffect, useState } from 'react';

const useFetch = (url) => {
	const [myData, setMyData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(url);
			const data = await res.json();
			setMyData(data);
		};
		fetchData();
	}, [url]);

	return { myData };
};
export default useFetch;
