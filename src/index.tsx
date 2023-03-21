import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ResetGlobalCSS from './ResetGlobalCSS';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
root.render(
	<React.StrictMode>
		<ResetGlobalCSS />
		<App />
	</React.StrictMode>,
);
