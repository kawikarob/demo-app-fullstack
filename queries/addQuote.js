module.exports = function addQuote() {
   return `
    INSERT INTO quotes SET ?;
    `;
};
