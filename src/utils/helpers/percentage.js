const percentage = (positive, negative, flag) => {
	if (flag) {
		return Math.round((positive * 100) / (positive + negative)).toFixed(2);
	} else {
		return Math.round((negative * 100) / (positive + negative)).toFixed(2);
	}
};

export default percentage;
