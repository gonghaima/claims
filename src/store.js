/* istanbul ignore file */
import React, { useReducer, createContext, useEffect } from "react";
import reducers, { initialState } from "./reducers";
import claimDataPromise from "./api/claims";

export const StoreContext = createContext();

export const reducer = (state, action) => {
  const act = reducers[action.type];
  const update = act(state, action.payload);
  return { ...state, ...update };
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    !state.initialised &&
      claimDataPromise().then(data => {
        dispatch({
          type: "setClaimsData",
          payload: data
        });
      });
  }, [state]);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};
