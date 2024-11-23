import React from 'react';
import * as S from './GenderSelect.style';

const GenderSelect = ({ selected, onSelect }) => {
	return (
		<div css={S.container}>
			<div
				css={S.option(selected === 'male')}
				onClick={() => onSelect('male')}
				role='button'
				aria-pressed={selected === 'male'}
			>
				남자
			</div>
			<div
				css={S.option(selected === 'female')}
				onClick={() => onSelect('female')}
				role='button'
				aria-pressed={selected === 'female'}
			>
				여자
			</div>
		</div>
	);
};

export default React.memo(GenderSelect);
