import { usePostFortunes } from '@/apis/postFortunes.js';
import Button from '@/components/common/Button/Button.jsx';
import CheckBox from '@/components/common/CheckBox/CheckBox';
import Dropdown from '@/components/common/Dropdown/Dropdown';
import GenderSelect from '@/components/common/GenderSelect/GenderSelect';
import { InputBirth, InputName } from '@/components/common/Input/Input';
import { DATE } from '@/constants/date';
import LoadingPage from '@/pages/LoadingPage/LoadingPage.jsx';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './InputContainer.style';

const InputContainer = () => {
	const [name, setName] = useState('');
	const [birth, setBirth] = useState('');
	const [gender, setGender] = useState('MALE');
	const [time, setTime] = useState(''); // 태어난 시간
	const [isDisabled, setIsDisabled] = useState(false); // 체크박스
	const [isOpen, setIsOpen] = useState(false);
	const [isFormValid, setIsFormValid] = useState(false); // 유효성 검사
	const navigate = useNavigate();

	const today = new Date();
	const tomorrow = new Date(today);
	tomorrow.setDate(today.getDate() + 1);
	const afterTomorrow = new Date(today);
	afterTomorrow.setDate(today.getDate() + 2);

	const handleNameChange = useCallback((e) => {
		setName(e.target.value);
	}, []);

	const handleBirthChange = useCallback((e) => {
		const formattedValue = formatInputToDate(e.target.value); // 입력값을 변환
		setBirth(formattedValue);
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

	const formatInputToDate = (input) => {
		const numericInput = input.replace(/\D/g, '');
		const year = numericInput.slice(0, 4);
		const month = numericInput.slice(4, 6);
		const day = numericInput.slice(6, 8);

		let formatted = year;
		if (month) formatted += `.${month}`;
		if (day) formatted += `.${day}`;

		return formatted;
	};

	const { mutate, isPending } = usePostFortunes();

	const toCustomDateFormat = (date) => {
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');
		return `${year}.${month}.${day}`;
	};

	const handleButtonClick = () => {
		const todayFormatted = toCustomDateFormat(today);
		const tomorrowFormatted = toCustomDateFormat(tomorrow);
		const afterTomorrowFormatted = toCustomDateFormat(afterTomorrow);

		if (isFormValid) {
			const api_params = {
				name,
				birth,
				isLunar: false,
				period: isDisabled ? '' : time,
				gender,
				today: todayFormatted,
				tomorrow: tomorrowFormatted,
				afterTomorrow: afterTomorrowFormatted,
			};

			mutate(api_params, {
				onSuccess: (data) => {
					console.log(data.data);
					navigate(`/result?fortuneId=${data.data.fortuneId}`);
				},
				onError: (error) => {
					console.log(error);
				},
			});
		}
	};

	useEffect(() => {
		const isNameValid = name.trim().length > 0;
		const isBirthValid = /^\d{4}\.\d{2}\.\d{2}$/.test(birth);
		const isTimeValid = isDisabled || time !== '';
		setIsFormValid(isNameValid && isBirthValid && isTimeValid);
	}, [name, birth, time, isDisabled]);

	if (isPending) return <LoadingPage name={name}></LoadingPage>;

	return (
		<div>
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
			<div css={S.btnContainer}>
				<Button
					variant='primary'
					size='large'
					isDisabled={!isFormValid}
					onClick={handleButtonClick}
				>
					사주 보러가기
				</Button>
			</div>
			;
		</div>
	);
};

export default InputContainer;
