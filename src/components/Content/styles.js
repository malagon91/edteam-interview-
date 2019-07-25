import styled from 'styled-components';

export const ContentStyles = styled.div`
	margin: auto;
	max-width: 1200px;
	@media screen and (min-width: 640px) {
		display: flex;
	}
	.content {
		flex: 1;
		background: #129a22;
	}
	.sidebar {
		flex: 0 1 300px;
		border: 1px solid #000;
		background: #673ab7;
	}
`;
