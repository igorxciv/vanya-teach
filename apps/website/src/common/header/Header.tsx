import { FC, useCallback, useState } from 'react';
import { CartIcon, HeartIcon, SearchIcon } from 'ui-kit/icons';
import { Hamburger } from './hamburger';
import { IconLinkStyled, HeaderStyled, IconButtonStyled, LeftMenuStyled, RightMenuStyled, ContentStyled } from './Header.style';
import { Logo } from './logo';
import { MobileMenu } from './mobile-menu';

export const Header: FC = () => {
	const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

	const openMobileMenuHandler = (): void => setMobileMenuOpened(true);
	const closeMobileMenuHandler = useCallback((): void => setMobileMenuOpened(false), []);

	return (
		<HeaderStyled>
			<ContentStyled>
				<LeftMenuStyled>
					<Hamburger onClick={openMobileMenuHandler} />
					<IconButtonStyled>
						<SearchIcon />
					</IconButtonStyled>
				</LeftMenuStyled>
				<Logo />
				<RightMenuStyled>
					<IconLinkStyled to="/favorite">
						<HeartIcon />
					</IconLinkStyled>
					<IconLinkStyled to="/cart">
						<CartIcon />
					</IconLinkStyled>
				</RightMenuStyled>
			</ContentStyled>

			<MobileMenu opened={mobileMenuOpened} onClose={closeMobileMenuHandler} />
		</HeaderStyled>
	);
};
