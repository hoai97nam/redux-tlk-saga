import { PayloadAction } from '@reduxjs/toolkit';
import counterSaga from 'features/counter/counterSaga';
import { increment } from 'features/counter/counterSlice';
import { all, takeEvery } from 'redux-saga/effects';


function* helloSaga() {
    console.log('hello');
}

export default function* rootSaga() {
    console.log('root saga');
    yield all([helloSaga(), counterSaga()])
    yield takeEvery(increment().type,function log(action: PayloadAction) {
        console.log(action);
        
    })

}