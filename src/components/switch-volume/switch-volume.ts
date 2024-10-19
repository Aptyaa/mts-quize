import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import audioOn from '../../assets/svg/audio-on.svg';
import audioOf from '../../assets/svg/audio-of.svg';

export const SwitchVolume = styled(Switch)(({ theme }) => ({
	width: 56,
	height: 32,
	borderRadius: 16,
	padding: 0,
	'& .MuiSwitch-switchBase': {
		padding: 2,
		margin: 2,
		transitionDuration: '200ms',
		'&.Mui-checked': {
			transform: 'translateX(24px)',
			color: '#fff',
			'& + .MuiSwitch-track': {
				backgroundColor: '#3E75FF',
				opacity: 1,
			},
			'&.Mui-disabled + .MuiSwitch-track': {
				opacity: 0.5,
			},
		},
	},
	'& .MuiSwitch-thumb': {
		boxSizing: 'border-box',
		width: 24,
		height: 24,

		'&:before': {
			content: "''",
			position: 'absolute',
			width: '100%',
			height: '100%',
			left: 0,
			top: 0,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundImage: `url(${audioOf})`,
		},
	},
	'& .Mui-checked': {
		'& .MuiSwitch-thumb:before': {
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundImage: `url(${audioOn})`,
		},
	},
	'& .MuiSwitch-track': {
		borderRadius: 26 / 2,
		backgroundColor: theme.palette.mode === 'dark' ? '#39393D' : '#BCC3D0',
		opacity: 0.5,
		transition: theme.transitions.create(['background-color'], {
			duration: 500,
		}),
	},
}));
