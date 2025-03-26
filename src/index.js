import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from "react-router";
import {RouterRenders} from "./public/routes";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App/>
			<RouterRenders/>
		</BrowserRouter>
	</React.StrictMode>
);
