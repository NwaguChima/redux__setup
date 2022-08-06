const reducer = (contents = [], action) => {
  switch (action.type) {
    case "GET_CONTENTS":
      return [...contents, action.payload];
    case "REMOVE_CONTENTS":
      return contents.filter((content) => content.id !== action.payload);
    default:
      return contents;
  }
};

export default reducer;
