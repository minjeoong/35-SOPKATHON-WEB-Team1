import Dropdown from '@/components/common/Dropdown/Dropdown';
import { DATE } from '@/constants/date';
import { useState } from 'react';

const MainPage = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState('');

	const handleTrigger = () => {
		setIsOpen(!isOpen);
	};

	const handleSelect = (value) => {
		setSelectedValue(value);
	};

	return (
		<div>
			<Dropdown
				onTrigger={handleTrigger}
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				options={DATE}
				selectedValue={selectedValue}
				onSelect={handleSelect}
				placeholder='시간'
			/>
		</div>
	);
};

export default MainPage;
