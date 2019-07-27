import React from 'react';
import Select from 'react-select';
import {
	FormStyles,
	ColFormStyles,
	RowFormStyles,
	ButtonStyles,
	ButtonsContainer,
	ErrorsContainer
} from './styles';

export const Form = ({
	data: { header, title, user, post, body },
	onChange,
	changeSelect,
	users,
	onCancel,
	onSave,
	error
}) => (
	<FormStyles>
		<h3>{header}</h3>
		<RowFormStyles>
			<ColFormStyles post>
				<label>Post</label>
				<input
					type="text"
					name="post"
					onChange={onChange}
					disabled={true}
					value={post}
				/>
			</ColFormStyles>
			<ColFormStyles>
				<label>Usuario</label>
				<Select value={user} onChange={changeSelect} options={users} />
			</ColFormStyles>
		</RowFormStyles>
		<RowFormStyles>
			<ColFormStyles>
				<br />
				<br />
				<label>Titulo</label>
				<input type="text" name="title" onChange={onChange} value={title} />
			</ColFormStyles>
			<ColFormStyles area>
				<label>Contenido</label>
				<textarea
					rows="4"
					cols="50"
					name="body"
					onChange={onChange}
					value={body}
				/>
			</ColFormStyles>
		</RowFormStyles>
		<ButtonsContainer>
			<ButtonStyles onClick={onCancel}>Cancelar</ButtonStyles>
			<ButtonStyles onClick={onSave} type="save">
				Guardar
			</ButtonStyles>
		</ButtonsContainer>
		{error.length > 0 && (
			<ErrorsContainer>
				<h3>UPSS! Algo salio mal</h3>
				{error.map((er, index) => (
					<p key={index}>{er}</p>
				))}
			</ErrorsContainer>
		)}
	</FormStyles>
);
