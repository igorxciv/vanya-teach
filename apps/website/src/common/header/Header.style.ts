import { rem } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
	border-bottom: 1px solid var(--color-basic-500);
	position: fixed;
	width: 100%;
	left: 0;
	z-index: 1;
	display: flex;
	align-items: center;
	top: 0;
`;

export const LogoLink = styled(Link)`
	display: block;
	width: ${rem(16)};
	color: var(--color-basic-500);
	padding: 0 ${rem(10)};
`;
