import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import { App } from './app';
import { theme } from './mui-preset';

import { Container, CssBaseline } from '@mui/material';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);
root.render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container maxWidth='md'>
				<Box sx={{ height: '100vh' }}>
					<App />
				</Box>
			</Container>
		</ThemeProvider>
	</StrictMode>
);
