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

		case TYPES.decrement:

		default:
			return state;
	}
};
export default userReducer;
