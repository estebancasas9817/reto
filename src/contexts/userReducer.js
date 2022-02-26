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
			const positiveVotes = state.find((user) => user.id === action.payload);
			return state.map((user) => {
				if (user.id === action.payload) {
					return {
						...user,
						votes: {
							...user.votes,
							positive: (positiveVotes.votes.positive += 1),
						},
					};
				} else {
					return user;
				}
			});
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
			return state;
	}
};
export { TYPES };
export default userReducer;
