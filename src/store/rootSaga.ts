import { fork, all } from 'redux-saga/effects';
import requireContext from 'require-context.macro';

const req = requireContext('.', true, /\.\/.+\/saga\.ts$/);
const sagas: Array<string> = [];
req.keys().forEach(key => {
    sagas.push(req(key).default);
});

export default function*() {
    yield all(sagas.map(fork));
}
