import { put, takeLatest } from "redux-saga/effects";
import { categoryApi } from "../../api/CategoryApi";
import { categoryTypes } from "../reducers/CategoryReducers";

function* categoryWatcher (){
    yield takeLatest(categoryTypes.CATEGORY_REQUEST, categoryWorker)    
}

function* categoryWorker (action) {
    try{
        const response = yield categoryApi(action.category)
        const news = response.data.articles
        yield put({type: categoryTypes.CATEGORY_SUCCESS, payload: news})
    }
    catch(error){
        yield put({type: categoryTypes.CATEGORY_FAILED})
    }
}

export default categoryWatcher