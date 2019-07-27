/*
	Posts Actions and helpers
 */

import Api from '../Api';
import toastr from 'toastr';
import idx from 'idx';
import { INIT_LOAD, GET_POSTS, ERROR_LOAD, GET_USERS } from './ActionTypes';
const optionsTo = {
	progressBar: true,
	positionClass: 'toast-top-right'
};
//Setters on redux
export const initLoad = () => ({ type: INIT_LOAD });
export const setPosts = posts => ({ type: GET_POSTS, payload: posts });
export const setUsers = users => ({ type: GET_USERS, payload: users });
export const setError = error => ({ type: ERROR_LOAD, payload: error });

/*
	Description: Llama a la api para obtener los posts
	Return: Nada
*/
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

/*
	Description: Llama a la api para insertar los posts
	Return: promise(bool)
*/
export const insertPost = post => {
	return async (dispatch, getState) => {
		try {
			const { data, status } = await Api.post('posts', { ...post });
			if (status === 200 || status === 201) {
				const {
					App: { posts, users }
				} = getState();
				const newPosts = handleInsert(data, posts, users);
				dispatch(setPosts(newPosts));
				toastr.success(
					`Se inserto con exito el post, ${data.id}`,
					`Nuevo`,
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

/*
	Description: Llama a la api para actualizar los posts
	Return: promise(bool)
*/
export const updatePost = post => {
	return async (dispatch, getState) => {
		try {
			const { data, status } = await Api.put(`posts/${post.id}`, { ...post });
			if (status === 200 || status === 201) {
				const {
					App: { posts, users }
				} = getState();
				const newPosts = handleUpdate(data, posts, users);
				dispatch(setPosts(newPosts.sort(sortPosts)));
				toastr.success(
					`Se actualizo con exito el post, ${data.id}`,
					`Actualización`,
					optionsTo
				);
				return true;
			} else {
				toastr.error(
					`Error al actualizar el post, intentalo nuevamente`,
					`Error`,
					optionsTo
				);
				return false;
			}
		} catch (e) {
			dispatch(setError(e));
			toastr.error(
				`Error al actualizar el post, ${e.message}`,
				`Error`,
				optionsTo
			);
			return false;
		}
	};
};

/*
	Description: Maneja la informacion en redux para update
	Return: array
*/
const handleUpdate = (item, posts, users) => {
	const user = users.filter(user => user.id === item.userId);
	const name = user.length > 0 ? user[0].username : 'NA';
	const obj = { ...item, name };
	const filterPost = posts.filter(post => post.id !== item.id);
	return [...filterPost, obj];
};

/*
	Description: Sort Generico por object.id
*/
const sortPosts = (a, b) => a.id - b.id;

/*
	Description: Maneja la informacion en redux para insert
	Return: array
*/
const handleInsert = (item, posts, users) => {
	const user = users.filter(user => user.id === item.userId);
	const name = user.length > 0 ? user[0].username : 'NA';
	const newId = posts[posts.length - 1].id + 1;
	const obj = { ...item, id: newId, name };
	return [...posts, obj];
};

/*
	Description: Llama a la api para eliminar los posts
	Return: promise(bool)
*/
export const deletePost = id => {
	return async (dispatch, getState) => {
		try {
			const { status } = await Api.delete(`posts/${id}`);
			if (status === 200 || status === 201) {
				const {
					App: { posts }
				} = getState();
				const newPosts = handleDelete(id, posts);
				dispatch(setPosts(newPosts));
				toastr.success(
					`Se elimino con exito el post, ${id}`,
					`Eliminado`,
					optionsTo
				);
				return true;
			} else {
				toastr.error(
					`Error al eliminar el post, intentalo nuevamente`,
					`Error`,
					optionsTo
				);
				return false;
			}
		} catch (e) {
			dispatch(setError(e));
			toastr.error(
				`Error al eliminar el post, ${e.message}`,
				`Error`,
				optionsTo
			);
			return false;
		}
	};
};

/*
	Description: Maneja la informacion en redux para delete
	Return: array
*/
const handleDelete = (id, posts) => posts.filter(post => post.id !== id);
