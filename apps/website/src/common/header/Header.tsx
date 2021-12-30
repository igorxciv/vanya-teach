import { FC } from 'react';
import { LogoIcon } from 'ui-kit/icons';
import { HeaderStyled } from './Header.style';

export const Header: FC = () => {
	return (
		<HeaderStyled>
			<LogoIcon />
		</HeaderStyled>
	);
};
