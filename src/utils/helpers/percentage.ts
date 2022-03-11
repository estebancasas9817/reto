const percentage = (votes: number, totalVotes: number) => {
	return Number(Math.round((votes * 100) / totalVotes).toFixed(2));
};

export default percentage;
