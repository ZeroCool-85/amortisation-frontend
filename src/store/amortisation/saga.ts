import { call, put, takeEvery } from 'redux-saga/effects';
import { amortisationRequest } from 'store/amortisation/actions';
import {
    FETCH_AMORTISATION,
    FETCH_AMORTISATION_ERROR,
    FETCH_AMORTISATION_REQUEST,
    SET_AMORTISATION
} from 'store/amortisation/constants';
import { amortisationService } from 'services/api'

function* fetchAmortisation(payload: ReturnType<typeof amortisationRequest>) {
    return yield call(
        [amortisationService, amortisationService.get],
        'amortisation',
        { params: payload.amortisationRequest },
    )
}


function* fetchAmortisationFlow(payload: ReturnType<typeof amortisationRequest>) {
    try {
        yield put({ type: FETCH_AMORTISATION_REQUEST, loading: true })

        const response = yield call(fetchAmortisation, payload);

        yield put({ type: SET_AMORTISATION, amortisation: response.data })

        yield put({ type: FETCH_AMORTISATION_REQUEST, loading: false })
    } catch (error) {
        yield put({ type:  FETCH_AMORTISATION_ERROR, error: error, loading: false })
    }
}

export default function* root() {
    yield takeEvery(FETCH_AMORTISATION, fetchAmortisationFlow);
}
