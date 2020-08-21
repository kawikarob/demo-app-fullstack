export default (state, action) => {
   switch (action.type) {
      case "REMOVE_QUOTE":
         return {
            ...state,
            quotes: state.quotes.filter((quote) => {
               return quote.id !== action.payload;
            }),
         };

      case "ADD_QUOTE":
         return {
            ...state,
            quotes: [action.payload, ...state.quotes],
         };

      case "EDIT_QUOTE":
         const updateQuote = action.payload;
         const updateQuotes = state.quotes.map((quote) => {
            if (quote.id === updateQuote.id) {
               return updateQuote;
            }
            return quote;
         });
         return {
            ...state,
            quotes: updateQuotes,
         };

      default:
         return state;
   }
};
