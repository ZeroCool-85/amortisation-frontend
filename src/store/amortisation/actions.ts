import {FETCH_AMORTISATION} from 'store/amortisation/constants';
import {AmortisationRequest} from 'interfaces/request';

export function amortisationRequest(amortisationRequest: AmortisationRequest) {
    return { type: FETCH_AMORTISATION, amortisationRequest };
}
