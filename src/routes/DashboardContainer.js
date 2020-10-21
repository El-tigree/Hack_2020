import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import InvestmentCalculator from './InvestmentCalculator';

function DashboardContainer() {
	return (
		<div>
			<main>
				<Route exact={true} path="/dashboard" component={Dashboard} />
				<Route exact={true} path="/calculator" component={InvestmentCalculator} />
			</main>
		</div>
	)
}

export default DashboardContainer;
