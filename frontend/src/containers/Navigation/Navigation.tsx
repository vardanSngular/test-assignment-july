import React, { useState, useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";

interface Props {
  tabs: Array<any>;
  activeTabIndex: number;
  onTabChange: (arg: number) => void;
}

const Navigation = ({ tabs, activeTabIndex = 0, onTabChange }: Props) => {
  const { updateContext, username } = useContext(AppContext) || {};

  const renderedTabs = tabs.map((tab, tabIndex) => {
    const className = tabIndex === activeTabIndex ? "active" : "";

    return (
      <div
        key={tabIndex}
        className={`Navigation--container--tabs--container--tab ${className}`}
        onClick={() => onTabChange(tabIndex)}
      >
        {tab}
      </div>
    );
  });

  const activeTabLabel = tabs[activeTabIndex];

  return (
    <div className='Navigation--container'>
      <div className='Navigation--container--activeTabLabel'>{username}</div>

      <div className='Navigation--container--tabs--container'>
        {renderedTabs}
      </div>
    </div>
  );
};

export default Navigation;
