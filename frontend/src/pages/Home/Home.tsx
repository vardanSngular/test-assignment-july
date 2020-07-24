import React, { useState } from "react";
import Navigation from "../../containers/Navigation/Navigation";
import Dashboard from "../../containers/Dashboard/Dashboard";
import Settings from "../../containers/Settings/Settings";

interface State {
  dashboard: string;
  settings: boolean;
}

const Home = () => {
  const tabs = ["dashboard", "settings"];

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const onTabChange = (updatedActiveTabIndex: number) => {
    setActiveTabIndex(updatedActiveTabIndex);
  };

  const renderedScreens = [<Dashboard />, <Settings />];

  return (
    <div className='Home--container'>
      <div className='Home--container--navigation'>
        <Navigation
          tabs={tabs}
          onTabChange={onTabChange}
          activeTabIndex={activeTabIndex}
        />
      </div>
      <div className='Home--container--content'>
        {renderedScreens[activeTabIndex]}
      </div>
    </div>
  );
};

export default Home;
