import Api from '../Api';
import toastr from 'toastr';
import { INIT_LOAD, GET_POSTS, ERROR_LOAD } from './ActionTypes';
const optionsTo = {
	progressBar: true,
	positionClass: 'toast-bottom-right'
};

export const initLoad = () => ({ type: INIT_LOAD });
export const setPosts = posts => ({ type: GET_POSTS, payload: posts });
export const setError = error => ({ type: ERROR_LOAD, payload: error });

export const getPosts = () => {
	return async dispatch => {
		try {
			dispatch(initLoad());
			const data = await Api.get('posts');
			dispatch(setPosts(data));
		} catch (e) {
			dispatch(setError(e));
			toastr.error(
				`Error al obtener los posts, ${e.message}`,
				`Error`,
				optionsTo
			);
		}
	};
};
