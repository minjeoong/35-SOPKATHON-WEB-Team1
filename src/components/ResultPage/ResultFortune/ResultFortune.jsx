import { IcFireCash, IcGood, IcLast, IcSiren } from '@/assets/svg';
import * as S from './ResultFortune.style';

const ResultFortune = ({ data }) => {
	return (
		<div css={S.containerStyle}>
			<div css={S.itemStyle}>
				<IcFireCash style={{ width: '15.2173rem' }} />
				<h2 css={S.titleStyle}>금전운</h2>
				<p css={S.contentStyle}>{data?.data.moneyContent}</p>
			</div>
			<div css={S.itemStyle}>
				<IcSiren style={{ width: '18.6rem' }} />
				<h2 css={S.titleStyle}>조심하세요!</h2>
				<p css={S.contentStyle}>{data?.data.cautionContent}</p>
			</div>
			<div css={S.itemStyle}>
				<IcGood style={{ width: '20.1rem' }} />
				<h2 css={S.titleStyle}>알아두면 좋아요</h2>
				<p css={S.contentStyle}>{data?.data.notableContent}</p>
			</div>{' '}
			<div css={S.itemStyle}>
				<IcLast style={{ width: '19rem' }} />
				<h2 css={S.titleStyle}>총론</h2>
				<p css={S.contentStyle}>{data?.data.totalContent}</p>
			</div>
		</div>
	);
};

export default ResultFortune;
