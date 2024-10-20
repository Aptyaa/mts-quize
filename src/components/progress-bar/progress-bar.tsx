import LinearProgress from '@mui/material/LinearProgress';
import { useCallback } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface IProgressBarProps {
	value: number;
	min: number;
	max: number;
}
export function ProgressBar({ value, min, max }: IProgressBarProps) {
	const normalise = useCallback(
		(value: number) => {
			if (value > max) return;
			return ((value - min) * 100) / (max - min);
		},
		[min, max]
	);
	return (
		<Box sx={{ width: 'inherit', textAlign: 'left' }}>
			<Typography variant='body2' sx={{}}>
				{value > max ? max : value}/{max}
			</Typography>{' '}
			<LinearProgress
				sx={{ width: 'inherit', backgroundColor: '#F2F6FF', height: '2px' }}
				variant='determinate'
				value={normalise(value)}
			/>
		</Box>
	);
}
