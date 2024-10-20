import createPalette from '@mui/material/styles/createPalette';
import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
	interface Palette {
		outlinedButton: Palette['primary'];
		link: Palette['primary'];
		radioColor: Palette['primary'];
		dropdownHeaderColor: Palette['primary'];
	}

	interface PaletteOptions {
		outlinedButton?: PaletteOptions['primary'];
		link?: PaletteOptions['primary'];
		radioColor: PaletteOptions['primary'];
		dropdownHeaderColor: PaletteOptions['primary'];
	}
}

//  #F2F6FF  - scroll progress
// #626C77 - текст дропдавна "подробнее" и плейсхолдера инпута
//#A6A6A6 - цвет ссылок в чекбоксах
// #BCC3D080 - инпут бг

const palette = createPalette({
	primary: {
		main: '#FF0032',
		contrastText: '#fff',
	},
	secondary: {
		main: '#F2F3F7',
		contrastText: '#000',
	},
	outlinedButton: {
		main: '#fff',
		contrastText: '#fff',
	},
	link: {
		main: '#A6A6A6',
	},
	radioColor: {
		main: '#8D969F',
	},
	dropdownHeaderColor: {
		main: '#626C77',
	},

	background: {
		default: '#CCE9FD',
		paper: '#FFF',
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
		MuiPaper: {
			styleOverrides: {
				root: {
					boxShadow: 'none',
				},
			},
		},
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

		// MuiInput: {
		// 	// defaultProps: {
		// 	// 	disableUnderline: true,
		// 	// },
		// 	styleOverrides: {
		// 		input: {
		// 			padding: 0,
		// 			'&::placeholder': {
		// 				color: '#626C77',
		// 			},
		// 		},
		// 		root: {
		// 			backgroundColor: '#BCC3D0',
		// 			opacity: 0.5,
		// 			borderRadius: '8px',
		// 			borderBottom: 'none',
		// 			padding: '12px 14px',
		// 			'&:hover': {
		// 				borderBottom: 'none',
		// 			},
		// 		},
		// 	},
		// },
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					// backgroundColor: '#FF0032',
				},
			},
		},
	},
});
