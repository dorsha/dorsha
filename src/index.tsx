import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.css';
import './assets/sitemap.xml';
import './assets/robots.txt';
import './assets/404.html';
import './assets/google2aaefee79ec62e95.html';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
