import cloneDeep from 'lodash.clonedeep';
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
			const newUsersPositive = cloneDeep(state);
			return newUsersPositive.map((user) => {
				if (user.id === action.payload) {
					user.votes.positive += 1;
				}
				return user;
			});
		}

		case TYPES.decrement: {
			const newUsersNegative = cloneDeep(state);
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
