import React from 'react';
import * as S from './GenderSelect.style';

const GenderSelect = ({ selected, onSelect }) => {
	return (
		<div css={S.container}>
			<div
				css={S.option(selected === 'MALE')}
				onClick={() => onSelect('MALE')}
				role='button'
				aria-pressed={selected === 'MALE'}
			>
				남자
			</div>
			<div
				css={S.option(selected === 'FEMALE')}
				onClick={() => onSelect('FEMALE')}
				role='button'
				aria-pressed={selected === 'FEMALE'}
			>
				여자
			</div>
		</div>
	);
};

export default React.memo(GenderSelect);
