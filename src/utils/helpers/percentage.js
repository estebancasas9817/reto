const percentage = (votes, totalVotes) => {
	return Math.round((votes * 100) / totalVotes).toFixed(2);
};

export default percentage;
