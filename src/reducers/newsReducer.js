const initialState = {
  newsPost: [],
};

const newsReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'NEWS_POST':
      return {
        ...state,
        newsPost: action.payload,
      };
    default:
      return state;
  }
};

export default newsReducers;
