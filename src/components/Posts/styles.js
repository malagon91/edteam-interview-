import styled from 'styled-components';

export const PostStyles = styled('section')`
	flex: 1;
	color: black;
`;

export const FormStyles = styled('div')`
	padding: 1em;
	font-size: 15px;
`;

export const RowFormStyles = styled('div')`
	display: flex;
`;
export const ColFormStyles = styled('div')`
	flex: 1;
	margin: 15px;
	display: block;
	float: left;
	label {
		margin-right: ${props => (props.post ? '21px' : '15px')};
		font-size: 20px;
	}
	input {
		width: ${props => (props.post ? '30%' : '80%')};
		font-size: 20px;
	}
	textarea {
		width: 100%;
		margin-top: 5px;
		font-size: 20px;
	}
`;

export const ButtonsContainer = styled('div')`
	flex: 1;
	text-align: center;
	margin-top: 20px;
`;

export const ButtonStyles = styled('button')`
	color: ${props => (props.type == 'save' ? '#21d84b' : '#f81e1e')};
	font-size: 1em;
	border-width: 2px;
	border-style: solid;
	border-color: ${props => (props.type == 'save' ? '#21d84b' : '#f81e1e')};
	border-image: initial;
	background: white;
	padding: 0.25em 1em;
	cursor: pointer;
	margin-left: 20px;
	width: 200px;
	height: 40px;
	&:focus {
		outline: none;
	}
	&:hover {
		background-color: ${props =>
			props.type == 'save' ? '#21d84b' : '#f81e1e'};
		color: white;
		border-color: white;
	}
`;

export const ErrorsContainer = styled('div')`
	background-color: red;
	color: white;
	font-weight: bold;
	padding-left: 2em;
	padding-top: 1em;
	padding-bottom: 1em;
	margin-top: 2em;
	p {
		display: list-item;
		padding-left: 10px;
	}
`;
