import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './routes/Dashboard';
import InvestmentCalculator from './routes/InvestmentCalculator';
import InfoView from './routes/InfoView';

function App() {
  return (
    <Switch>
      <Route exact={true} path="/" component={Dashboard} />
      <Route exact={true} path="/info" component={InfoView} />
      <Route exact={true} path="/calculator" component={InvestmentCalculator} />
    </Switch>
  );
}

export default App;
