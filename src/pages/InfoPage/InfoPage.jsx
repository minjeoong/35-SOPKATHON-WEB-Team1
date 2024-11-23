import { useState } from 'react';
import InputContainer from '@/components/InfoPage/InputContainer/InputContainer';
import * as S from './InfoPage.style';
import Header from '@/components/common/Header/Header';
import Button from '@/components/common/Button/Button';

const InfoPage = () => {
	const [isFormValid, setIsFormValid] = useState(false);

	return (
		<div css={S.backgroundStyle}>
			<Header>사주를 보기 앞서서 네가 궁금해!</Header>
			<section css={S.container}>
				<InputContainer onValidityChange={setIsFormValid} />
				<div css={S.btnContainer}>
					<Button variant='primary' size='large' isDisabled={!isFormValid}>
						사주 보러가기
					</Button>
				</div>
			</section>
		</div>
	);
};

export default InfoPage;
