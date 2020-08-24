module.exports = function deleteQuoteById() {
   return `
    DELETE FROM 
        quotes
    WHERE 
    id = ?;`;
};
