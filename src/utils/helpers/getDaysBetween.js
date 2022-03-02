const getDaysBetween = (finalDate) => {
	const today = new Date();

	const oneDay = 1000 * 60 * 60 * 24;

	const diffInTime = finalDate.getTime() - today.getTime();

	const diffInDays = Math.round(diffInTime / oneDay);

	return diffInDays;
};
export { getDaysBetween };
