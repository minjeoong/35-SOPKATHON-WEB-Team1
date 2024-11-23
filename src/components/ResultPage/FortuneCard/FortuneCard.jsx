import * as S from '@/components/ResultPage/FortuneCard/FortuneCard.style';
import { formatDate } from '@/utils/formatDate';

const FortuneCard = ({ data }) => {
	return (
		<div css={S.wrapper(data?.data.mainCardImageUrl)}>
			<span css={S.date}>
				{formatDate(data?.data.todayDate)} ~ {formatDate(data?.data.lastDate)}
			</span>
			<h2 css={S.title}>{data?.data.name}님이 타고난 기질은</h2>
			<h1 css={S.cardTitle}>{data?.data.cardName}</h1>
			<span css={S.cardContent}>{data?.data.cardContent}</span>
		</div>
	);
};

export default FortuneCard;
