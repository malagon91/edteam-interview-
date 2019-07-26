import React from 'react';
import {
	FormStyles,
	ColFormStyles,
	RowFormStyles,
	ButtonStyles,
	ButtonsContainer
} from './styles';

export const Form = ({
	data: { header, title, user, post, body },
	onChange
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
				<input type="text" name="user" onChange={onChange} value={user} />
			</ColFormStyles>
		</RowFormStyles>
		<RowFormStyles>
			<ColFormStyles title>
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
			<ButtonStyles>Cancelar</ButtonStyles>
			<ButtonStyles type="save">Guardar</ButtonStyles>
		</ButtonsContainer>
	</FormStyles>
);
