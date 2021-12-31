import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useLocationChange(callback: () => void): void {
	const location = useLocation();

	useEffect(() => {
		callback();
	}, [location.pathname, callback]);
}
