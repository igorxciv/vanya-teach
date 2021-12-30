import { FC } from 'react';
import { LogoIcon } from 'ui-kit/icons';
import { Hamburger } from './hamburger';
import { HeaderStyled, LogoLink } from './Header.style';

export const Header: FC = () => {
	return (
		<HeaderStyled>
			<Hamburger />
			<LogoLink to="/">
				<LogoIcon />
			</LogoLink>
		</HeaderStyled>
	);
};
