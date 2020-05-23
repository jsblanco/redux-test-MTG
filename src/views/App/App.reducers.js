import * as constants from "./App.constants";
const initialState = {
  cardList: [],
  selectedCards: [],
  loading: false,
  error: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_CARDS_REQUEST:
      if (!!state.cardList) return { ...state };
      return {
        ...state,
        loading: true,
      };
    case constants.GET_CARDS_SUCCESS:
      let newList = [...state.cardList, payload];
      return {
        ...state,
        loading: false,
        cardList: newList,
      };
    case constants.GET_CARDS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case constants.CLEAR_CARD_LIST:
      return {
        ...state,
        cardList: [],
      };
    case constants.REMOVE_FETCHED_CARD:
      return {
        ...state,
        cardList: state.cardList.filter((card) => card !== payload),
      };
    case constants.SELECT_CARD:
      return {
        ...state,
        cardList: state.cardList.filter((card) => card !== payload),
        selectedCards: [...state.selectedCards, payload],
      };
    case constants.UNSELECT_CARD:
      return {
        ...state,
        cardList: [...state.cardList, payload],
        selectedCards: state.selectedCards.filter((card) => card !== payload),
      };

    default:
      return state;
  }
};
