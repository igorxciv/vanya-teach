import React from 'react';
import { GlobalStyle } from 'app/global-style';

export const decorators = [
	(Story) => (
		<>
			<GlobalStyle />
			<Story />
		</>
	),
];
