import { rem } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
	border-bottom: ${rem(1)} solid var(--color__basic-200);
	position: fixed;
	width: 100%;
	left: 0;
	z-index: 1;
	top: 0;
`;

export const ContentStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	padding: ${rem(15)} ${rem(20)};
	min-width: var(--min-width);
	max-width: var(--max-width);
	margin: 0 auto;
`;

export const LeftMenuStyled = styled.div`
	display: flex;
	align-items: center;
`;

export const RightMenuStyled = styled.div`
	display: flex;
	align-items: center;
`;

export const IconButtonStyled = styled.button`
	display: block;
	width: ${rem(20)};
	padding: ${rem(10)};
	box-sizing: content-box;
	border: none;
	background: none;
	cursor: pointer;
`;

export const IconLinkStyled = styled(Link)`
	display: block;
	width: ${rem(20)};
	color: var(--color__basic-900);
	padding: ${rem(10)};
`;
