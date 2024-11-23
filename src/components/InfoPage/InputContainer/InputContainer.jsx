import { useState, useCallback, useEffect } from 'react';
import * as S from './InputContainer.style';
import { DATE } from '@/constants/date';
import Dropdown from '@/components/common/Dropdown/Dropdown';
import { InputBirth, InputName } from '@/components/common/Input/Input';
import GenderSelect from '@/components/common/GenderSelect/GenderSelect';
import CheckBox from '@/components/common/CheckBox/CheckBox';

const InputContainer = ({ onValidityChange }) => {
	const [name, setName] = useState('');
	const [birth, setBirth] = useState('');
	const [gender, setGender] = useState('male');
	const [time, setTime] = useState('');
	const [isDisabled, setIsDisabled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const handleNameChange = useCallback((e) => {
		setName(e.target.value);
	}, []);

	const handleBirthChange = useCallback((e) => {
		setBirth(e.target.value);
	}, []);

	const toggleDropdown = () => setIsOpen((prev) => !prev);

	const handleSelectTime = useCallback((value) => {
		setTime(value);
	}, []);

	const toggleTimeCheckbox = () => {
		setIsDisabled((prev) => !prev);
		if (isDisabled) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		const isNameValid = name.trim().length > 0;
		const isBirthValid = /^[0-9]{8}$/.test(birth); // YYYYMMDD
		const isTimeValid = isDisabled || time !== '';
		onValidityChange(isNameValid && isBirthValid && isTimeValid);
	}, [name, birth, time, isDisabled, onValidityChange]);

	return (
		<ul css={S.Container}>
			<li>
				<label>이름</label>
				<InputName value={name} onChange={handleNameChange} />
			</li>
			<li>
				<label>생년월일</label>
				<InputBirth value={birth} onChange={handleBirthChange} />
			</li>
			<li>
				<label>태어난 시간</label>
				<Dropdown
					onTrigger={toggleDropdown}
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					options={DATE}
					selectedValue={time}
					onSelect={handleSelectTime}
					placeholder='시간'
					isDisabled={isDisabled}
				/>
				<div css={S.NullDate}>
					<CheckBox isChecked={isDisabled} onClick={toggleTimeCheckbox} />
					<span>태어난 시간 몰라요</span>
				</div>
			</li>
			<li>
				<label>성별</label>
				<GenderSelect selected={gender} onSelect={setGender} />
			</li>
		</ul>
	);
};

export default InputContainer;
