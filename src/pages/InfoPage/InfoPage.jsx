import { useState } from 'react';
import InputContainer from '@/components/InfoPage/InputContainer/InputContainer';
import * as S from './InfoPage.style';
import Header from '@/components/common/Header/Header';

const InfoPage = () => {
	return (
		<div css={S.backgroundStyle}>
			<Header>사주를 보기 앞서서 네가 궁금해!</Header>
			<section css={S.container}>
				<InputContainer />
			</section>
		</div>
	);
};

export default InfoPage;
