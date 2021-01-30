import HeadlineTypes from '../actions/HeadlinesTypes'
import { put, takeLatest } from 'redux-saga/effects'
import { headlinesApi } from '../../api/HeadlinesApi'

function* headlineWatcher(){
    yield takeLatest(HeadlineTypes.HEADLINE_REQUEST, headlineWorker)
}

function* headlineWorker() {
    try{
        const response = yield headlinesApi()
        const news = response.data.articles
        yield put({type: HeadlineTypes.HEADLINE_SUCCESS, payload: news})
    }
    catch(error){
        yield put({type: HeadlineTypes.HEADLINE_FAILED})
    }
}

export default headlineWatcher