import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Tabs } from "./components/Tabs";

const tabs = [
  { id: "tab-1", title: "Tab 1", content: "Some text 1" },
  { id: "tab-2", title: "Tab 2", content: "Some text 2" },
  { id: "tab-3", title: "Tab 3", content: "Some text 3" },
];

const App: React.FC = () => (
  <div className="App">
    <ul className="nav nav-pills">
      <li className="nav-item">
        <NavLink to="/" exact className="nav-link">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/tabs" exact className="nav-link">
          Tabs
        </NavLink>
      </li>
    </ul>

    <Switch>
      <Route path="/" exact component={Home} />
      <Route
        path="/tabs"
        render={({ match }) => <Tabs tabs={tabs} path={match.path} />}
      />
    </Switch>
  </div>
);

export default App;
