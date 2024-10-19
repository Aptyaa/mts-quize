import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';
import { ThemeProvider } from '@emotion/react';
import { theme } from './mui-preset';

import './styles.css';
import { CssBaseline } from '@mui/material';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);
root.render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</StrictMode>
);
