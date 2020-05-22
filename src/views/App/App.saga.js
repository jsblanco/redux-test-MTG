import { takeLatest, call, put } from "redux-saga/effects";
import * as constants from "./App.constants";
import getCards from "../../utils/api";
import {
  getCardsRequest,
  getCardsSuccess,
  getCardsFail,
} from "./App.actions";



function* getState() {
yield call(getState)
}

function* getCardsEffect() {
    try {
      yield call(getCardsRequest)
      const { cards } = yield call(getCards);
      yield put(getCardsSuccess(cards));
    } catch (e) {
      console.error(e);
      yield put(getCardsFail(e));
    }
  }


function* cardsSagas() {
yield takeLatest(constants.GET_CARDS_REQUEST, getCardsEffect);
}
export default cardsSagas;

