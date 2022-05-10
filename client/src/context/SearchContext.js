import { createContext, useMemo, useReducer } from 'react';

const INITIAL_STATE = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case 'NEW_SEARCH':
      return action.payload;
    case 'RESET_SEARCH':
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);
  const { city, dates, options } = state;
  const value = useMemo(
    () => ({
      city,
      dates,
      options,
      dispatch,
    }),
    [city, dates, options]
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
