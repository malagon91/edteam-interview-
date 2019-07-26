import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostStyles } from './styles';
import { Table } from '../common/Table';
import { getPosts } from '../../Actions/Posts';
import { Loading } from '../common/Loading';
import { Waypoint } from 'react-waypoint';
import { Add } from '../common/Add';
import { Form } from './form';

const formData = {
	active: false,
	header: '',
	post: 0,
	user: 0,
	title: '',
	body: ''
};

export const Posts = () => {
	const [items, setItems] = useState(10);
	const [form, setForm] = useState(formData);
	const dispatch = useDispatch();
	const { loading, posts } = useSelector(selector);

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

	useEffect(() => {
		dispatch(getPosts());
	}, []);

	return (
		<PostStyles>
			{form.active && <Form data={form} onChange={onChange} />}
			<h3>POSTS</h3>
			{loading ? <Loading /> : <Table data={loadPost()} />}
			<Add title={'Agregar Post'} disabled={form.active} onClick={newPost} />
			<Waypoint onLeave={loadMore} />
		</PostStyles>
	);
};

const selector = ({ App: { loading, posts } }) => ({
	loading,
	posts
});
