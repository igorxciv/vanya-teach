import { transparentize } from 'polished';
import styled, { css } from 'styled-components';
import { TransitionDuration } from './constants';

export const SidebarStyled = styled.div<{ state: string }>`
	transform: translateX(-100%);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 2;
	transition: transform ${TransitionDuration.MobileMenuOpen}ms ease-in;

	${({ state }) =>
		state === 'entered' &&
		css`
			transform: translateX(0);
		`}
`;

export const OverlayStyled = styled.div<{ state: string }>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: ${transparentize(0.85, '#191919')};
	z-index: 1;
	cursor: pointer;
	opacity: 0;
	transition: opacity 300ms ease-in-out;

	${({ state }) =>
		state === 'entered' &&
		css`
			opacity: 1;
		`}
`;
