import { put, takeLatest } from "redux-saga/effects";
import { searchApi } from "../../api/SearchApi";
import { searchTypes } from "../reducers/SearchReducer";

function* searchWatcher() {
    yield takeLatest(searchTypes.SEARCH_REQUEST, searchWorker)
}

function* searchWorker(action) {
    try {
        const response = yield searchApi(action.keyword)
        const news = response.data.articles
        yield put ({type: searchTypes.SEARCH_SUCCESS, payload: news})
    }
    catch (error) {
        yield put({type: searchTypes.SEARCH_FAILED})
    }
}


export default searchWatcher