import { FC, HTMLAttributes } from 'react';
import { HamburgerButton, HamburgerLine } from './Hamburger.style';

type Props = HTMLAttributes<HTMLButtonElement>;

export const Hamburger: FC<Props> = (props: Props) => {
	return (
		<HamburgerButton {...props}>
			<HamburgerLine />
			<HamburgerLine />
		</HamburgerButton>
	);
};
