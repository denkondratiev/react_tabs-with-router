import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';

const App: React.FC = () => (
  <div className="App">
    <ul>
      <li>
        <NavLink to="/home" />
      </li>
      <li>
        <NavLink to="/home/tabs" />
      </li>
    </ul>

    <Switch>
      <Route path="/" component={Home} />
      <Route
        path="/tabs"
        // render={({ match }) => <Tabs tabs={tabs} path={match.path} />}
      />
    </Switch>
  </div>
);

export default App;
