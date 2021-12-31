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
`;

export const DescriptionStyled = styled.div`
	text-align: center;
	line-height: 1.5;
`;
