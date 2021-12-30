import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { Root } from './app/Root';

import './index.css';

ReactDOM.render(
	<StrictMode>
		<Root />
	</StrictMode>,
	document.getElementById('root'),
);
