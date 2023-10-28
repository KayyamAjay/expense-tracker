import React from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [],
};

//create context
export const GlobalStore = React.createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(AppReducer, initialState);
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTranscation(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  return (
    <GlobalStore.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTranscation,
      }}
    >
      {children}
    </GlobalStore.Provider>
  );
};
