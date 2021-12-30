import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';

export default {
	component: Header,
	title: 'Header',
	decorators: [
		(Story) => (
			<BrowserRouter>
				<Story />
			</BrowserRouter>
		),
	],
};

export const Default = () => <Header />;
