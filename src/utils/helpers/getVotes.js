const getVotes = (positive, negative) => {
	let iconName = 'thumbs-down';
	let typeOfButton = 'yellowColor';
	if (positive > negative) {
		iconName = 'thumbs-up';
		typeOfButton = 'blueColor';
	}
	return { iconName, typeOfButton };
};
export { getVotes };
