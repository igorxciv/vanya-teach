import { FC } from 'react';
import { LogoIcon } from 'ui-kit/icons';
import { LogoLinkStyled } from './Logo.style';

export const Logo: FC = () => {
	return (
		<LogoLinkStyled to="/">
			<LogoIcon />
		</LogoLinkStyled>
	);
};
