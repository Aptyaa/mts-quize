import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import cross from '../../assets/svg/cross.svg';

export const ButtonCross = styled(Button)(() => ({
	width: 32,
	height: 32,
	padding: 0,
	backgroundImage: `url(${cross})`,
	backgroundSize: 'contain',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
}));
