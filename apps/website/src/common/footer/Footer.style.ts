import { rem } from 'polished';
import styled from 'styled-components';

export const FooterStyled = styled.footer`
	color: var(--color__basic-500);
	font-size: ${rem(11)};
	letter-spacing: ${rem(1)};
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: ${rem(20)};
	padding: ${rem(10)};
`;

export const InfoLinksListStyled = styled.ul`
	display: flex;
`;

export const InfoButtonStyled = styled.button`
	border: none;
	background: none;
	cursor: pointer;
	color: var(--color__basic-500);
	font-family: var(--font__primary);
	letter-spacing: ${rem(1)};
	line-height: 1.5;

	&:hover {
		color: var(--color__basic-900);
	}
`;

export const DescriptionStyled = styled.div`
	text-align: center;
	line-height: 1.5;
`;

export const CopyrightStyled = styled.div`
	text-align: center;
	line-height: 1.5;
`;
