import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Content } from '../components/Content';

export const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Content} />
		</Switch>
	</BrowserRouter>
);
