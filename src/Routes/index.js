import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Posts } from '../components/Posts';

export const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Posts} />
			<Route exact path="/post" component={Posts} />
			<Route exact component={Posts} />
		</Switch>
	</BrowserRouter>
);
