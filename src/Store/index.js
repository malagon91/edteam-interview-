import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from '../Reducers';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

export default function configureStore(initialState, url = '/') {
	const useReduxDevtools =
		typeof window !== 'undefined' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
		window.__REDUX_DEVTOOLS_EXTENSION__();
	const composeEnhancers = useReduxDevtools
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: compose;

	let history = createBrowserHistory();

	const enhancer = composeEnhancers(
		applyMiddleware(thunk, routerMiddleware(history))
	);

	const state = { ...initialState };
	const store = createStore(allReducers(history), state, enhancer);

	return { store, history };
}
