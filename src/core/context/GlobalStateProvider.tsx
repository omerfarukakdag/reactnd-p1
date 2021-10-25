import React, { createContext } from 'react';
import useMergeState from '../hooks/useMergeState';
import { IGlobalState } from '../interfaces';

const initialGlobalState: IGlobalState = {
  globalState: {
    books: [],
    searchResults: [],
  },
  setGlobalState: () => {},
};

const GlobalStateContext = createContext(initialGlobalState);

const GlobalStateProvider = ({ children }: { children?: React.ReactNode }) => {
  const [globalState, setGlobalState] = useMergeState({ ...initialGlobalState.globalState });

  return <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>{children}</GlobalStateContext.Provider>;
};

export { initialGlobalState, GlobalStateContext, GlobalStateProvider };
