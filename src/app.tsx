import { ProgressBar } from './components/progress-bar/progress-bar';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { DropDownInfo } from './components/drop-info/drop-info';
import { Checkbox } from '@mui/material';

export const App = () => {
	const [value, setValue] = useState(1);
	return (
		<>
			<Button onClick={() => setValue(value + 1)} variant='contained'>
				pres progress
			</Button>
			<ProgressBar min={1} max={20} value={value} />
			<DropDownInfo>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam at
				voluptatem voluptatibus explicabo inventore tenetur accusantium esse
				accusamus provident repellendus possimus necessitatibus ex, non
				laboriosam maxime, modi cum consequuntur aperiam.
			</DropDownInfo>
			<Checkbox />
		</>
	);
};
