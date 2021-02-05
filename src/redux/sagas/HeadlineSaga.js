import HeadlineTypes from "../actions/HeadlinesTypes";
import { delay, put, race, takeLatest } from "redux-saga/effects";
import { headlinesApi } from "../../api/HeadlinesApi";
import { sentryError } from "../../components/Helper";

function* headlineWatcher() {
  yield takeLatest(HeadlineTypes.HEADLINE_REQUEST, headlineWorker);
}

function* headlineWorker() {
  try {
    const { response, timeout } = yield race({
      response: headlinesApi(),
      timeout: delay(10000),
    });

    if (response)
      yield put({
        type: HeadlineTypes.HEADLINE_SUCCESS,
        payload: response.data.articles,
      });
    else {
      sentryError("server down", "headline fetch");
      yield put({ type: HeadlineTypes.HEADLINE_FAILED, error: "server down" });
    }
  } catch (error) {
    sentryError("failed to fetch headline", "saga headline");
    yield put({ type: HeadlineTypes.HEADLINE_FAILED, error });
  }
}
// function* headlineWorker() {

//   }

export default headlineWatcher;
