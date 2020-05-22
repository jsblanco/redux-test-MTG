import * as constants from "./App.constants";
const initialState = {
  cardList: [],
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_CARDS_REQUEST:
      if (!!state.cardList) return {...state};
      return {
        ...state,
        loading: true,
      };
    case constants.GET_CARDS_SUCCESS:
        let newList = [...state.cardList, payload]
      return {
        ...state,
        loading: false,
        cardList: newList
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
  