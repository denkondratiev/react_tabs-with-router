import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Tab } from './Tab';

interface TabsI {
  id: string;
  title: string;
  content: string;
}

interface TabsProps {
  tabs: TabsI[];
  path: string;
}

export const Tabs: React.FC<TabsProps> = (props) => {
  const { tabs, path } = props;

  return (
    <div>
      <h1>TABS</h1>
      <nav>
        <ul className="nav nav-tabs">
          {tabs.map(tab => (
            <li key={tab.title} className="nav-item">
              <NavLink
                to={`${path}/${tab.id}`}
                className="nav-link"
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <nav>
        <ul className="nav nav-tabs">
          {tabs.map((tab) => (
            <li key={tab.title} className="nav-item">
              <Route path={`${path}/${tab.id}`} render={() => <Tab content={tab.content} />} />
            </li>
          ))}
        </ul>
      </nav>

    </div>
  );
};
