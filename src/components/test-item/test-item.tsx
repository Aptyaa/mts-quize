import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import useTheme from '@mui/material/styles/useTheme';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';

export const TestItem = ({ children }: { children: ReactNode }) => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				maxWidth: 400,
				minWidth: 1,
				borderRadius: '8px',
				p: 0,
				bgcolor: theme.palette.secondary.main,
			}}>
			<Radio color='primary' size='small' sx={{ color: '#8D969F' }} />
			<Typography component='p' textAlign={'left'}>
				{children}
			</Typography>
		</Box>
	);
};
