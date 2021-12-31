import { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import { LogoIcon } from 'ui-kit/icons';
import { HeaderStyled, LogoStyled, MenuLinkStyled, NavLinkStyled, SeparatorStyled, SidebarStyled } from './Sidebar.style';

type Props = HTMLAttributes<HTMLElement>;

export const Sidebar = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
	return (
		<SidebarStyled {...props} ref={ref}>
			<HeaderStyled>
				<LogoStyled to="/">
					<LogoIcon />
				</LogoStyled>
			</HeaderStyled>
			<nav>
				<ul>
					<li>
						<NavLinkStyled to="/tabs">Табы</NavLinkStyled>
					</li>
				</ul>
				<SeparatorStyled />
				<ul>
					<li>
						<MenuLinkStyled to="/login">Войти</MenuLinkStyled>
					</li>
					<li>
						<MenuLinkStyled to="/register">Зарегистрироваться</MenuLinkStyled>
					</li>
				</ul>
			</nav>
		</SidebarStyled>
	);
});

Sidebar.displayName = 'Sidebar';
