const initialState = {
  weatherPost: {},
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'WEATHER_POST':
      return {
        ...state,
        weatherPost: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
