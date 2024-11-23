import * as S from '@/components/ResultPage/FortuneCard/FortuneCard.style';
import { DATA } from '@/constants/fortuneDummy';
import { formatDate } from '@/utils/formatDate';

const FortuneCard = () => {
	return (
		<div css={S.wrapper}>
			<span css={S.date}>
				{formatDate(DATA.todayDate)} ~ {formatDate(DATA.lastDate)}
			</span>
			<h2 css={S.title}>{DATA.name}님이 타고난 기질은</h2>
			<h1 css={S.cardTitle}>{DATA.cardName}</h1>
			<span css={S.cardContent}>{DATA.cardContent}</span>
		</div>
	);
};

export default FortuneCard;
