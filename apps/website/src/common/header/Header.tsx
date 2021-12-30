import { FC } from 'react';
import { CartIcon, HeartIcon, LogoIcon, SearchIcon } from 'ui-kit/icons';
import { Hamburger } from './hamburger';
import { IconLink, HeaderStyled, LogoLink, IconButton, LeftMenu, RightMenu } from './Header.style';

export const Header: FC = () => {
	return (
		<HeaderStyled>
			<LeftMenu>
				<Hamburger />
				<IconButton>
					<SearchIcon />
				</IconButton>
			</LeftMenu>
			<LogoLink to="/">
				<LogoIcon />
			</LogoLink>
			<RightMenu>
				<IconLink to="/favorite">
					<HeartIcon />
				</IconLink>
				<IconLink to="/cart">
					<CartIcon />
				</IconLink>
			</RightMenu>
		</HeaderStyled>
	);
};
