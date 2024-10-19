import createPalette from '@mui/material/styles/createPalette';
import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
	interface Palette {
		alternate: Palette['primary'];
	}

	interface PaletteOptions {
		alternate?: PaletteOptions['primary'];
	}
}

const palette = createPalette({
	primary: {
		main: '#FF0032',
		contrastText: '#fff',
	},
	secondary: {
		main: '#F2F3F7',
		contrastText: '#000',
	},
	alternate: {
		main: '#fff',
		contrastText: '#fff',
	},
});

export const theme = createTheme({
	palette,

	typography: {
		h1: {
			fontSize: '2rem',
		},
		body1: {
			fontSize: '0.87rem',
		},
	},

	components: {
		MuiButtonBase: {
			styleOverrides: {
				root: {},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 8,
					fontSize: '1rem',
					textTransform: 'none',
					boxShadow: 'none',
					'&:hover': {
						borderColor: 'inherit',
						boxShadow: 'none',
					},
				},
			},
		},
		MuiCheckbox: {
			styleOverrides: {
				root: {
					color: '#BCC3D0',
				},
			},
		},
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					// backgroundColor: '#FF0032',
				},
			},
		},
	},
});
