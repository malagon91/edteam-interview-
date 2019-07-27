import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LabelWayPoint, PostStyles, ActionButtonsStyles } from './styles';
import { Table } from '../common/Table';
import {
	getPosts,
	insertPost,
	deletePost,
	updatePost
} from '../../Actions/Posts';
import { Loading } from '../common/Loading';
import { Waypoint } from 'react-waypoint';
import { Add } from '../common/Add';
import { Form } from './form';
import idx from 'idx';
import { confirmAlert } from 'react-confirm-alert'; // Import

const formData = {
	active: false,
	header: '',
	post: 0,
	user: null,
	title: '',
	body: ''
};

/*
 * Posts
 * return component
 *
 * */
export const Posts = () => {
	const [items, setItems] = useState(10);
	const [error, setError] = useState([]);
	const [form, setForm] = useState(formData);
	const dispatch = useDispatch();
	const { loading, posts, users } = useSelector(selector);

	const loadMore = () => {
		setItems(items + 10);
	};

	const onUpdate = ({ id, title, body }) => {
		window.scrollTo(0, 0);
		const { userId } = idx(posts.filter(pos => pos.id === id), _ => _[0]) || {};
		const { id: uId, name: uName } =
			idx(users.filter(user => user.id === userId), _ => _[0]) || {};
		const user = { value: uId, label: uName };
		const model = {
			post: id,
			user,
			title,
			body
		};
		setForm({ ...form, active: true, header: 'Actualiza el Post', ...model });
	};

	const onDelete = ({ id }) => {
		confirmAlert({
			title: 'Eliminar el post',
			message: `Estas seguro de eliminar el post ${id}`,
			buttons: [
				{
					label: 'Si',
					onClick: () => {
						console.log(id);
						dispatch(deletePost(id));
					}
				},
				{
					label: 'No',
					onClick: () => {}
				}
			]
		});
	};

	const getButtons = item => (
		<ActionButtonsStyles>
			<button className="update" onClick={() => onUpdate(item)}>
				Actualizar
			</button>
			<button className="delete" onClick={() => onDelete(item)}>
				Eliminar
			</button>
		</ActionButtonsStyles>
	);

	const loadPost = () =>
		posts.slice(0, items).map(({ id, name, title, body }) => ({
			id,
			user: name,
			title,
			body,
			actions: getButtons({ id, name, title, body })
		}));

	const sortPosts = (a, b) => a.id < b.id;
	const newPost = () => {
		window.scrollTo(0, 0);

		setForm({ ...form, active: true, header: 'Nuevo Post' });
	};

	const onChange = ({ target: { name, value } }) => {
		const newForm = { ...form, [name]: value };
		setForm(newForm);
	};

	const changeSelect = item => {
		const newForm = { ...form, user: item };
		setForm(newForm);
	};

	const getUsers = () =>
		users.map(user => ({ value: user.id, label: user.name }));

	const onSave = async () => {
		if (validForm()) {
			const { post: id, user, title, body } = form;
			const postData = { userId: user.value, title, body };
			if (id === 0) {
				const insert = await dispatch(insertPost(postData));
				if (insert) onCancel();
			} else {
				const updateConfirm = await dispatch(updatePost({ ...postData, id }));
				if (updateConfirm) onCancel();
			}
		}
	};

	const onCancel = () => {
		setForm(formData);
		setError([]);
	};

	const validForm = () => {
		const { user, title, body } = form;
		setError([]);
		let errors = [];
		if (!user) errors.push('Ingresa el usuario');
		if (title.length <= 0) errors.push('Ingresa el titulo');
		if (body.length <= 0) errors.push('Ingresa el post');
		setError(errors);
		return errors.length === 0;
	};

	useEffect(() => {
		dispatch(getPosts());
	}, []);

	return (
		<PostStyles>
			{form.active && (
				<Form
					data={form}
					onChange={onChange}
					changeSelect={changeSelect}
					users={getUsers()}
					onCancel={onCancel}
					onSave={onSave}
					error={error}
				/>
			)}
			<h3>POSTS</h3>
			{loading ? <Loading /> : <Table data={loadPost()} />}
			<Add title={'Agregar Post'} disabled={form.active} onClick={newPost} />
			<Waypoint onLeave={loadMore} />
			{loadPost().length < posts.length && (
				<LabelWayPoint>Cargando...</LabelWayPoint>
			)}
		</PostStyles>
	);
};

const selector = ({ App: { loading, posts, users } }) => ({
	loading,
	posts,
	users
});
