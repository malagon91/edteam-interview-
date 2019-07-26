import React from 'react';
import { AddStyles } from './styles';

export const Add = ({ onClick, title, disabled = false }) => (
	<AddStyles>
		<button
			onClick={onClick}
			data-toggle="tooltip"
			data-placement="top"
			title={title}
			disabled={disabled}
		>
			<i className="fa fa-plus fa-4x" />
		</button>
	</AddStyles>
);
