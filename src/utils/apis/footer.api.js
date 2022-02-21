const API_FOOTER = 'http://localhost:4000/footer';
const fetchFooter = async () => {
	try {
		const res = await fetch(API_FOOTER);
		const dataFooter = await res.json();
		return dataFooter;
	} catch (error) {
		console.log(error);
	}
};
export default fetchFooter;
