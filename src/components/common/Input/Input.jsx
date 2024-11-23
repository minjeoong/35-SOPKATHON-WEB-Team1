import React, { useState } from 'react';
import { MoonAndStars, Sun } from '@/assets/svg';
import * as S from './Input.style';

export const InputName = React.memo(({ value, onChange }) => {
	return (
		<input
			css={S.input}
			placeholder='이름을 입력해주세요'
			value={value}
			onChange={onChange}
		/>
	);
});

export const InputBirth = React.memo(({ value, onChange }) => {
	const [isSolar, setIsSolar] = useState(true);

	const toggleDateType = () => {
		setIsSolar((prev) => !prev);
	};

	return (
		<div css={isSolar ? S.inputPlus : S.inputMinus}>
			<button onClick={toggleDateType}>
				{isSolar ? (
					<Sun width={20} height={20} />
				) : (
					<MoonAndStars width={20} height={20} />
				)}
				<span>{isSolar ? '양력' : '음력'}</span>
			</button>
			<input
				placeholder='생년월일을 입력해주세요'
				value={value}
				onChange={onChange}
			/>
		</div>
	);
});
