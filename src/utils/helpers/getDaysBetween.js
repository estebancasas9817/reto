const getDaysBetween = (finalDate) => {
	const today = new Date();

	const oneDay = 1000 * 60 * 60 * 24;

	// Calculating the time difference between two dates
	const diffInTime = finalDate.getTime() - today.getTime();

	// Calculating the no. of days between two dates
	const diffInDays = Math.round(diffInTime / oneDay);

	return diffInDays;
};
export { getDaysBetween };
