import { FC } from 'react';
import { HamburgerButton, HamburgerLine } from './Hamburger.style';

export const Hamburger: FC = () => {
	return (
		<HamburgerButton>
			<HamburgerLine />
			<HamburgerLine />
		</HamburgerButton>
	);
};
