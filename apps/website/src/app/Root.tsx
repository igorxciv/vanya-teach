import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../common/header';

export const Root: FC = () => {
	return (
		<BrowserRouter>
			<Header />
		</BrowserRouter>
	);
};
