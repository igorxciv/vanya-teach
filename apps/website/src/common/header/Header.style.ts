import { rem } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
	border-bottom: ${rem(1)} solid var(--color__basic-200);
	justify-content: space-between;
	position: fixed;
	width: 100%;
	left: 0;
	z-index: 1;
	display: flex;
	align-items: center;
	top: 0;
	padding: ${rem(15)} ${rem(20)};
	box-sizing: border-box;
`;

export const LeftMenu = styled.div`
	display: flex;
	align-items: center;
`;

export const RightMenu = styled.div`
	display: flex;
	align-items: center;
`;

export const IconButton = styled.button`
	display: block;
	width: ${rem(20)};
	padding: ${rem(10)};
	box-sizing: content-box;
	border: none;
	background: none;
	cursor: pointer;
`;

export const LogoLink = styled(Link)`
	display: block;
	width: ${rem(16)};
	color: var(--color__basic-900);
	padding: 0 ${rem(10)};
`;

export const IconLink = styled(Link)`
	display: block;
	width: ${rem(20)};
	color: var(--color__basic-900);
	padding: ${rem(10)};
`;
