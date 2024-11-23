import Header from '@/components/common/Header/Header';
import { CARDS } from '@/constants/card';
import * as S from '@/pages/LoadingPage/Loading.style';
import Slider from 'react-slick';
import './slick-theme.css';
import './slick.css';

const LoadingPage = ({ name }) => {
	const settings = {
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		infinite: true,
		centerMode: true,
		useTransform: false,
	};

	return (
		<div css={S.wrapper}>
			<Header>{name}님의 3일간 운세는?</Header>
			<div css={S.noticeLayout}>
				<p css={S.description}>
					너만을 위한 사주 결과를 정성스럽게 준비 중이야.
				</p>
				<p css={S.wait}>
					1분 정도 걸릴 수 있으니까 <br />
					조금만 기다려줘 ㅠ.ㅠ
				</p>
			</div>
			<Slider {...settings} css={S.slider}>
				{CARDS.map((Card, index) => (
					<div key={index}>
						<Card width={188} height={255} />
					</div>
				))}
			</Slider>
		</div>
	);
};

export default LoadingPage;
