// *  ESTA FUNCION SE ARREGLARÁ PARA TRANSFORMAR LA FECHA Y NO CORTARLA
const monthsBtwnDates = (startDate, endDate) => {
	startDate = new Date(startDate);
	endDate = new Date(endDate);
	return Math.max(
		(endDate.getFullYear() - startDate.getFullYear()) * 12 +
			endDate.getMonth() -
			startDate.getMonth(),
		0
	);
};

export default monthsBtwnDates;
