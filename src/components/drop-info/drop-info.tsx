import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import useTheme from '@mui/material/styles/useTheme';
import { ReactNode } from 'react';

interface IDropInfoProps {
	children: ReactNode;
}

export const DropDownInfo = ({ children }: IDropInfoProps) => {
	const { palette } = useTheme();
	return (
		<Accordion
			sx={{ borderBottom: '1px solid lightgrey' }}
			slotProps={{ heading: { component: 'h4' } }}>
			<AccordionSummary
				sx={{ color: palette.dropdownHeaderColor.main }}
				aria-controls='panel1-content'
				id='panel1-header'>
				+ Подробнее
			</AccordionSummary>
			<AccordionDetails>{children}</AccordionDetails>
		</Accordion>
	);
};
