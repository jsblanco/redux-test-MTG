import * as constants from "./App.constants";
const initialState = {
  cardList: [],
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_CARDS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case constants.GET_CARDS_SUCCESS:
        console.log(payload)
      return {
        ...state,
        loading: false,
        cardList: payload,
      };
    case constants.GET_CARDS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
      default:
        return state;
    }
  };
  