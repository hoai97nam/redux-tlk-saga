import { PayloadAction } from "@reduxjs/toolkit";
import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { incrementSaga, incrementSagaSuccess } from "./counterSlice";


// export function* log(action: PayloadAction){
//     console.log('Log', action);
    
// }

function* handleIncreasementSaga(action:PayloadAction<number>){
    console.log('increasement');
    yield delay(1500)
    yield put(incrementSagaSuccess(action.payload))
}

export default function* counterSaga() {
    console.log('counter saga');

    // yield takeEvery(incrementSaga.toString(), handleIncreasementSaga)
    yield takeLatest(incrementSaga.toString(), handleIncreasementSaga)
}