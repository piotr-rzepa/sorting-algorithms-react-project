/*
 * Komponent bezklasowy będący rootem naszej aplikacji
 */
// @flow
import React from 'react';
import HorizontalNav from './HorizontalNav';
import VerticalNav from './VerticalNav';
import Dashboard from './Dashboard';
import AlgorithmPage from './AlgorithmPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<div>
				<HorizontalNav />
				<VerticalNav />
				<Switch>
					<Route path="/" exact component={Dashboard} />
					<Route path="/algorithm/:id" exact component={AlgorithmPage} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
