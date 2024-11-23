import { useState } from 'react';
import * as S from './GenderSelect.style'; // 스타일을 import

const GenderSelect = () => {
  const [selected, setSelected] = useState('male');

  const handleSelect = (gender) => {
    setSelected(gender);
  };

  return (
    <>
      <div css={S.genderTitle}>성별</div>
      <div css={S.container}>
        <div
          css={S.option(selected === 'male')}
          onClick={() => handleSelect('male')}
          role="button"
          aria-pressed={selected === 'male'}
        >
          남자
        </div>
        <div
          css={S.option(selected === 'female')}
          onClick={() => handleSelect('female')}
          role="button"
          aria-pressed={selected === 'female'}
        >
          여자
        </div>
      </div>
    </>
  );
};

export default GenderSelect;
