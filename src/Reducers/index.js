import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import AppReducer from '../Reducers/AppReducer';
export default history =>
	combineReducers({
		router: connectRouter(history),
		App: AppReducer
	});
