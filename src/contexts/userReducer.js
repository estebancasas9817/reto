const TYPES = {
	fetch: 'fetch',
	increment: 'increment',
	decrement: 'decrement',
};
const userReducer = (state = [], action) => {
	switch (action.type) {
		case TYPES.fetch: {
			return action.payload;
		}

		case TYPES.increment: {
			const newUsersPositive = JSON.parse(JSON.stringify(state));
			const algo = newUsersPositive.map((user) => {
				if (user.id === action.payload) {
					user.votes.positive += 1;
				}
				return user;
			});
			return algo;
		}

		case TYPES.decrement: {
			const newUsersNegative = JSON.parse(JSON.stringify(state));
			return newUsersNegative.map((user) => {
				if (user.id === action.payload) {
					user.votes.negative += 1;
				}
				return user;
			});
		}

		default:
			console.log('default');
			return state;
	}
};
export { TYPES };
export default userReducer;
