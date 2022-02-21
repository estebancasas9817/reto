const API_HEADER = 'http://localhost:4000/header';
const fetchHeader = async () => {
	try {
		const res = await fetch(API_HEADER);
		const dataHeader = await res.json();
		return dataHeader;
	} catch (error) {
		console.log(error);
	}
};
export default fetchHeader;
