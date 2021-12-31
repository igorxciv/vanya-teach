import { useEffect } from 'react';

export function useScrollLock(): void {
	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return (): void => {
			document.body.style.overflow = 'auto';
		};
	}, []);
}
