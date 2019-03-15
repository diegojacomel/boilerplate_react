// Types
import {
    FETCH_REGISTER_FORM,
} from './types';

const INITIAL_STATE = {
    register: {
        name: '',
        email: ''
    }
}

const formReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_REGISTER_FORM.SUCCESS:
            return {
                ...state,
                register: {
                    ...state.register,
                    ...action.data
                }
            }

        default:
            return state

    }
}

export default formReducer;