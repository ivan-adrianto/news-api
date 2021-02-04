import { all, takeLatest } from 'redux-saga/effects'
import HeadlineTypes from '../actions/HeadlinesTypes'
import categoryWatcher from './CategorySaga'
import headlineWatcher from './HeadlineSaga'
import searchWatcher from './SearchSaga'


function* rootSaga() {
    yield all ([
        headlineWatcher(),
        searchWatcher(),
        categoryWatcher(),
    ])
}

export default rootSaga