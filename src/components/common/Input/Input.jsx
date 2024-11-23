import React, { useState } from 'react';
import { MoonAndStars, Sun } from '@/assets/svg';
import * as S from './Input.style';

export const InputName = () => {
	return (
		<>
			<label css={S.label}>이름</label>
			<input css={S.input} placeholder='이름을 입력해주세요' />
		</>
	);
};

export const InputBirth = () => {
	const [isSolar, setIsSolar] = useState(true);

	const toggleDateType = () => {
		setIsSolar((prev) => !prev);
	};

	return (
		<>
			<label css={S.label}>생년월일</label>
			<div css={isSolar ? S.inputPlus : S.inputMinus}>
				<button onClick={toggleDateType}>
					{isSolar ? (
						<Sun width={20} height={20} />
					) : (
						<MoonAndStars width={20} height={20} />
					)}
					<span>{isSolar ? '양력' : '음력'}</span>
				</button>
				<input placeholder='생년월일을 입력해주세요' />
			</div>
		</>
	);
};
