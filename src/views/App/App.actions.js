import * as constants from "./App.constants";

export const getCardsRequest = () => ({
  type: constants.GET_CARDS_REQUEST,
});

export const getCardsSuccess = (payload) => ({
  type: constants.GET_CARDS_SUCCESS,
  payload
});

export const getCardsFail = (payload) => ({
  type: constants.GET_CARDS_FAIL,
  payload
});

export const clearCardList = () => ({
  type: constants.CLEAR_CARD_LIST,
});