import { rem } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarStyled = styled.aside`
	max-width: ${rem(435)};
	width: 85vw;
	background-color: var(--color__basic-100);
	height: 100vh;
`;

export const HeaderStyled = styled.header`
	display: flex;
	justify-content: center;
`;

export const LogoStyled = styled(Link)`
	padding: ${rem(10)};
	width: ${rem(16)};
	display: block;
	color: var(--color__basic-900);
`;

export const NavLinkStyled = styled(Link)`
	display: block;
	padding: ${rem(12)} ${rem(20)};
	text-transform: uppercase;
	font-weight: var(--font-weight__semi-bold);
	font-size: ${rem(11)};
	letter-spacing: ${rem(1.5)};
	text-decoration: none;
	color: var(--color__basic-900);
`;

export const SeparatorStyled = styled.hr`
	border: none;
	height: ${rem(1)};
	background-color: var(--color__basic-200);
	margin: ${rem(20)} auto;
	width: calc(100% - ${rem(40)});
`;

export const MenuLinkStyled = styled(Link)`
	display: block;
	text-decoration: none;
	color: var(--color__basic-900);
	font-size: ${rem(11)};
	padding: ${rem(15)} ${rem(20)};
	letter-spacing: ${rem(1.5)};
`;
