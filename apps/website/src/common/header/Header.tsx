import { FC } from 'react';
import { CartIcon, HeartIcon, LogoIcon, SearchIcon } from 'ui-kit/icons';
import { Hamburger } from './hamburger';
import {
	IconLinkStyled,
	HeaderStyled,
	LogoLinkStyled,
	IconButtonStyled,
	LeftMenuStyled,
	RightMenuStyled,
	ContentStyled,
} from './Header.style';

export const Header: FC = () => {
	return (
		<HeaderStyled>
			<ContentStyled>
				<LeftMenuStyled>
					<Hamburger />
					<IconButtonStyled>
						<SearchIcon />
					</IconButtonStyled>
				</LeftMenuStyled>
				<LogoLinkStyled to="/">
					<LogoIcon />
				</LogoLinkStyled>
				<RightMenuStyled>
					<IconLinkStyled to="/favorite">
						<HeartIcon />
					</IconLinkStyled>
					<IconLinkStyled to="/cart">
						<CartIcon />
					</IconLinkStyled>
				</RightMenuStyled>
			</ContentStyled>
		</HeaderStyled>
	);
};
