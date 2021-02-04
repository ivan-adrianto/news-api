import HeadlineTypes from '../actions/HeadlinesTypes'
import { delay, put, race, takeLatest } from 'redux-saga/effects'
import { headlinesApi } from '../../api/HeadlinesApi'

function* headlineWatcher(){
    yield takeLatest(HeadlineTypes.HEADLINE_REQUEST, headlineWorker)
}

function* headlineWorker() {
    // const {response, timeout} = yield race({
    //     response: headlinesApi(),
    //     timeout: delay(20000)
    // }
    
    try{
        const {response, timeout} = yield race({
            response: headlinesApi(),
            timeout: delay(10000)
          })
        
          if (response)
            yield put({type: HeadlineTypes.HEADLINE_SUCCESS, payload: response.data.articles})
          else
            yield put({type: HeadlineTypes.HEADLINE_FAILED, error: 'server down'})
        // const response = yield  headlinesApi()
        // const news = response.data.articles
        // yield put({type: HeadlineTypes.HEADLINE_SUCCESS, payload: news})
    }
    catch(error){
        yield put({type: HeadlineTypes.HEADLINE_FAILED, error})
    }
}
// function* headlineWorker() {
    

//   }

export default headlineWatcher