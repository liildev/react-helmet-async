import './index.css'
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

const appElement = (
	<BrowserRouter>
		<HelmetProvider>
				<App />
		</HelmetProvider>
	</BrowserRouter>
);


const container = document.getElementById('root') as HTMLElement;
const hasChildNodes = container?.hasChildNodes() ?? false;

hasChildNodes
	? hydrateRoot(container, appElement)
	: createRoot(container).render(appElement);
