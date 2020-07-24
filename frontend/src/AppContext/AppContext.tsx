import React, { createContext, useState } from "react";

type Context = {
  dashboardData: string;
  settingsData: string;
  username: string;
  updateContext: (args: object) => void;
};

export const AppContext = createContext<Partial<Context>>({});

interface Props {
  children: object;
}

const AppProvider = ({ children }: Props) => {
  const [state, setState] = useState({
    dashboardData: "",
    settingsData: "",
    username: "",
  });

  const updateContext = (updatedContext: object) => {
    setState((st) => ({
      ...st,
      ...updatedContext,
    }));
  };

  return (
    <AppContext.Provider value={{ ...state, updateContext }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
