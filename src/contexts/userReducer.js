const TYPES = {
	fetch: 'fetch',
	increment: 'increment',
	decrement: 'decrement',
};
const userReducer = (state = [], action) => {
	switch (action.type) {
		case TYPES.fetch:
			return action.payload;

		case TYPES.increment:
			console.log('entra positivo');

			const newUsersPositive = JSON.parse(JSON.stringify(state));
			return newUsersPositive.map((user) => {
				if (user.id === action.payload) {
					user.votes.positive += 1;
				}
				return user;
			});

		case TYPES.decrement:
			console.log('entra negativo');
			const newUsersNegative = JSON.parse(JSON.stringify(state));
			return newUsersNegative.map((user) => {
				if (user.id === action.payload) {
					user.votes.negative += 1;
				}
				return user;
			});

		default:
			return state;
	}
};
export default userReducer;
