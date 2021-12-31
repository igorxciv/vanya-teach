import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from 'common/header';
import { Footer } from 'common/footer';

export const Root: FC = () => {
	return (
		<BrowserRouter>
			<Header />
			<Footer />
		</BrowserRouter>
	);
};
