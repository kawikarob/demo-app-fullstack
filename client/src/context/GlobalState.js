import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

// initial state
const initialState = {
   quotes: [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
   const [state, dispatch] = useReducer(Reducer, initialState);

   // actions
   const removeQuote = (id) => {
      dispatch({
         type: "REMOVE_QUOTE",
         payload: id,
      });
   };

   const addQuote = (quote) => {
      dispatch({
         type: "ADD_QUOTE",
         payload: quote,
      });
   };

   const editQuote = (quote) => {
      console.log(quote);
      dispatch({
         type: "EDIT_QUOTE",
         payload: quote,
      });
   };

   return (
      <GlobalContext.Provider
         value={{
            quotes: state.quotes,
            removeQuote,
            addQuote,
            editQuote,
         }}
      >
         {children}
      </GlobalContext.Provider>
   );
};
