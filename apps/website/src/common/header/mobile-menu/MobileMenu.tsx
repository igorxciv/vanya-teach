import { useLocationChange } from 'lib/navigation';
import { noop } from 'lib/noop';
import { FC, ReactElement, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Transition } from 'react-transition-group';
import { TransitionDuration } from './constants';
import { OverlayStyled, SidebarStyled } from './MobileMenu.style';
import { Sidebar } from './sidebar';

type Props = {
	opened?: boolean;
	onClose?: () => void;
};

export const MobileMenu: FC<Props> = (props: Props) => {
	const { opened = false, onClose = noop } = props;

	const sidebarRef = useRef<HTMLDivElement>(null);
	const overlayRef = useRef<HTMLDivElement>(null);

	useLocationChange(onClose);

	const sidebarMenu = (
		<Transition in={opened} nodeRef={sidebarRef} mountOnEnter unmountOnExit timeout={{ exit: TransitionDuration.MobileMenuOpen }}>
			{(state): ReactElement => (
				<SidebarStyled ref={sidebarRef} state={state}>
					<Sidebar />
				</SidebarStyled>
			)}
		</Transition>
	);

	const overlay = (
		<Transition in={opened} nodeRef={overlayRef} mountOnEnter unmountOnExit timeout={{ exit: TransitionDuration.MobileMenuOpen }}>
			{(state): ReactElement => <OverlayStyled ref={overlayRef} state={state} role="presentation" onClick={onClose} />}
		</Transition>
	);

	return createPortal(
		<div>
			{sidebarMenu}
			{overlay}
		</div>,
		document.body,
	);
};
