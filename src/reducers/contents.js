const reducer = (contents = [], action) => {
  switch (action.type) {
    case "GET_CONTENT":
      return [...contents, action.payload];
    case "REMOVE_CONTENT":
      return contents.filter((content) => content.id !== action.payload);
    default:
      return contents;
  }
};

export default reducer;
