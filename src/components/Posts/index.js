import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostStyles } from './styles';
import { Table } from '../common/Table';
import { getPosts, insertPost } from '../../Actions/Posts';
import { Loading } from '../common/Loading';
import { Waypoint } from 'react-waypoint';
import { Add } from '../common/Add';
import { Form } from './form';

const formData = {
	active: false,
	header: '',
	post: 0,
	user: null,
	title: '',
	body: ''
};

export const Posts = () => {
	const [items, setItems] = useState(10);
	const [error, setError] = useState([]);
	const [form, setForm] = useState(formData);
	const dispatch = useDispatch();
	const { loading, posts, users } = useSelector(selector);

	const loadMore = () => {
		setItems(items + 10);
	};

	const loadPost = () =>
		posts
			.slice(0, items)
			.map(({ id, name, title, body }) => ({ id, user: name, title, body }));

	const newPost = () => {
		setForm({ ...form, active: true, header: 'Nuevo Post' });
	};

	const onChange = ({ target: { name, value } }) => {
		const newForm = { ...form, [name]: value };
		setForm(newForm);
	};

	const changeSelect = item => {
		const newForm = { ...form, user: item };
		console.log(newForm);
		setForm(newForm);
	};

	const getUsers = () =>
		users.map(user => ({ value: user.id, label: user.name }));

	const onSave = async () => {
		if (validForm()) {
			const { user, title, body } = form;
			const postData = { userId: user.value, title, body };
			const insert = await dispatch(insertPost(postData));
			if (insert) setForm(FormData);
		}
	};
	const onCancel = () => {
		setForm(formData);
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
		</PostStyles>
	);
};

const selector = ({ App: { loading, posts, users } }) => ({
	loading,
	posts,
	users
});
