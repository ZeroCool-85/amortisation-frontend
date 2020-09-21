import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import requireContext from 'require-context.macro';

const req = requireContext('.', true, /\.\/.+\/reducer\.ts$/);
let reducer = {};
req.keys().forEach(key => {
    const storeName = key.replace(/\.\/(.+)\/.+$/, '$1');
    reducer = {
        ...reducer,
        [storeName]: req(key).default,
    };
});

reducer = {
    ...reducer,
};

const appReducer = combineReducers({
    form,
    ...reducer,
});

export default appReducer;
