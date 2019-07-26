import initialState from '../Store/initial-store';
import { INIT_LOAD, GET_POSTS, ERROR_LOAD } from '../Actions/ActionTypes';

export default function(state = initialState, action) {
	switch (action.type) {
		case INIT_LOAD:
			return { ...state, loading: true };
		case GET_POSTS:
			return { ...state, posts: action.payload, loading: false };
		case ERROR_LOAD:
			return { ...state, error: action.payload, loading: false };
		default:
			return state;
	}
}
