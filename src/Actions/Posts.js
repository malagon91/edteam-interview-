import Api from '../Api';
import toastr from 'toastr';
import idx from 'idx';
import { INIT_LOAD, GET_POSTS, ERROR_LOAD, GET_USERS } from './ActionTypes';
const optionsTo = {
	progressBar: true,
	positionClass: 'toast-bottom-right'
};

export const initLoad = () => ({ type: INIT_LOAD });
export const setPosts = posts => ({ type: GET_POSTS, payload: posts });
export const setUsers = users => ({ type: GET_USERS, payload: users });
export const setError = error => ({ type: ERROR_LOAD, payload: error });

export const getPosts = () => {
	return async dispatch => {
		try {
			dispatch(initLoad());
			const { data: postData } = await Api.get('posts');
			const { data: usersData } = await Api.get('users');
			if (postData && usersData) {
				const mapPosts = postData.map(post => {
					const user = usersData.filter(user => user.id === post.userId);
					return user.length > 0
						? { ...post, name: user[0].username }
						: { ...post, name: 'NA' };
				});
				dispatch(setUsers(usersData));
				dispatch(setPosts(mapPosts));
			} else dispatch(setPosts());
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

export const insertPost = post => {
	return async dispatch => {
		try {
			const { data, status } = await Api.post('posts', { ...post });
			if (status === 200 || status === 201) {
				toastr.success(
					`Se inserto con exito el post, ${data.id}`,
					`POST`,
					optionsTo
				);
				return true;
			} else {
				toastr.error(
					`Error al insertar el post, intentalo nuevamente`,
					`Error`,
					optionsTo
				);
				return false;
			}
		} catch (e) {
			dispatch(setError(e));
			toastr.error(
				`Error al insertar el post, ${e.message}`,
				`Error`,
				optionsTo
			);
			return false;
		}
	};
};
