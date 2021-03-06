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

export const removeFetchedCard = (payload) => ({
  type: constants.REMOVE_FETCHED_CARD,
  payload
});


export const selectCard = (payload) => ({
  type: constants.SELECT_CARD,
  payload
});


export const unselectCard = (payload) => ({
  type: constants.UNSELECT_CARD,
  payload
});



