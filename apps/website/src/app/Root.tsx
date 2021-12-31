import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Header } from 'common/header';
import { Footer } from 'common/footer';
import { Home } from 'pages/home';
import { Tabs } from 'pages/tabs';
import { Cart } from 'pages/cart';
import { Account } from 'pages/account';
import { GlobalStyle } from './global-style';

export const Root: FC = () => {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/tabs" element={<Tabs />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/account" element={<Account />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};
