import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import _ from 'lodash';
import App from '../App';
import configureStore from '../Store';

global.__CLIENT__ = true;
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';
global.__DEVTOOLS__ = __DEVELOPMENT__; // eslint-disable-line

let reduxState = {};
if (window.__REDUX_STATE__) {
	try {
		let plain = JSON.parse(unescape(__REDUX_STATE__)); // eslint-disable-line
		_.each(plain, (val, key) => {
			reduxState[key] = val;
		});
	} catch (e) {}
}

const { store, history } = configureStore(reduxState);
export const RenderDom = () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>
);
