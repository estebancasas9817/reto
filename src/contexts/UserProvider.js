import { createContext, useReducer } from 'react';
import userReducer from './userReducer';

const UserContext = createContext();
const UserProvider = (props) => {
	const [user, dispatch] = useReducer(userReducer, []);
	return (
		<UserContext.Provider value={[user, dispatch]}>
			{props.children}
		</UserContext.Provider>
	);
};
export { UserContext };
export default UserProvider;
