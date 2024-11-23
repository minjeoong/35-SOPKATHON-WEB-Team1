import Dropdown from '@/components/common/Dropdown/Dropdown';
import { DATE } from '@/constants/date';
import { wrapper } from '@/pages/MainPage/MainPage.style';
import { useState } from 'react';

const MainPage = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState('');
	const [isDisabled, setIsDisabled] = useState(true);

	const handleTrigger = () => {
		setIsOpen(!isOpen);
	};

	const handleSelect = (value) => {
		setSelectedValue(value);
	};

	return (
		<div css={wrapper}>
			<Dropdown
				onTrigger={handleTrigger}
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				options={DATE}
				selectedValue={selectedValue}
				onSelect={handleSelect}
				placeholder='시간'
				isDisabled={isDisabled}
			/>
		</div>
	);
};

export default MainPage;
