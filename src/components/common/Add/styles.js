import styled from 'styled-components';

export const AddStyles = styled('div')`
	position: fixed;
	bottom: 3em;
	right: 3em;
	z-index: 100;
	width: 50px;
	button {
		border-radius: 50%;
		color: #00cbff;
		font-size: 1em;
		border-width: 2px;
		border-style: solid;
		border-color: #00cbff;
		border-image: initial;
		background: white;
		padding: 0.25em 1em;
		cursor: pointer;
		&:focus {
			outline: none;
		}
		&:hover {
			background-color: #00cbff;
			color: white;
			border-color: white;
		}
	}
`;
