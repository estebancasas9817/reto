import { createContext, useReducer } from 'react';
import userReducer from './userReducer';
import React from 'react';
import PropTypes from 'prop-types';
const UserContext = createContext();
const UserProvider = (props) => {
	const [user, dispatch] = useReducer(userReducer, []);
	return (
		<UserContext.Provider value={[user, dispatch]}>
			{props.children}
		</UserContext.Provider>
	);
};

UserProvider.propTypes = {
	children: PropTypes.node,
};
export { UserContext };
export default UserProvider;
