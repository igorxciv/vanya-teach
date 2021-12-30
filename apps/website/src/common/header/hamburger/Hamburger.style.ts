import { rem } from 'polished';
import styled from 'styled-components';

export const HamburgerButton = styled.button`
	background: none;
	border: none;
	box-sizing: content-box;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	height: ${rem(8)};
	justify-content: space-between;
	padding: ${rem(8)};
	width: ${rem(14)};
`;

export const HamburgerLine = styled.span`
	background-color: var(--color-basic-500);
	display: block;
	height: ${rem(1)};
	width: 100%;
`;
