import { IcHome } from '@/assets/svg/index.jsx';
import Button from '@/components/common/Button/Button.jsx';
import Header from '@/components/common/Header/Header';
import EmojiList from '@/components/ResultPage/EmojiList/EmojiList.jsx';

import FortuneCard from '@/components/ResultPage/FortuneCard/FortuneCard';
import ResultFortune from '@/components/ResultPage/ResultFortune/ResultFortune';
import { FortuneData } from '@/constants/fortuneData';
import { useGetFortune } from '@/hooks/useGetFortune';
import { useState } from 'react';
import * as S from './ResultPage.style';

const ResultPage = () => {
	const fortuneData = FortuneData;
	const [isFeedback, setIsFeedback] = useState(false);

	const { data } = useGetFortune(2);

	const onSubmit = () => {
		if (!isFeedback) {
			setIsFeedback(true);
		}
	};

	console.log(data);

	return (
		<>
			<Header>{data?.data.name}님의 운세 카드 대령이오 !</Header>
			<FortuneCard data={data} />

			<section css={S.cardContainer}>
				<ResultFortune data={data} />
			</section>
			<section css={S.emogiContainer}>
				<EmojiList />
				<Button
					variant={isFeedback ? 'thankyou' : 'feedback'}
					size='small'
					onClick={onSubmit}
				>
					{isFeedback ? '감사합니다' : '평가 제출하기'}
				</Button>
			</section>
			<section css={S.bottomButton}>
				<Button
					variant='primary'
					size='large'
					onClick={() => console.log('결과 공유하기')}
				>
					결과 공유하기
				</Button>
				<Button variant='togoHome' size='large' onClick={() => navigate('/')}>
					<IcHome />
					처음으로 돌아가기
				</Button>
			</section>
		</>
	);
};

export default ResultPage;
