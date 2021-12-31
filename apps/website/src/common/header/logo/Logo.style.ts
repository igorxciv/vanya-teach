import { rem } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoLinkStyled = styled(Link)`
	display: block;
	width: ${rem(16)};
	color: var(--color__basic-900);
	padding: 0 ${rem(10)};
`;
