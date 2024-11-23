import {
	IcLandingCardE1,
	IcLandingCardF1,
	IcLandingCardG1,
	IcLandingCardT1,
	IcLandingCardW1,
} from '@/assets/svg/index';
import * as S from '@/pages/LoadingPage/Loading.style';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const LoadingPage = () => {
	const sliderSettings = {
		autoplay: true,
		autoplaySpeed: 1000,
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 1000,
		centerMode: true,
	};

	return (
		<div>
			<Slider {...sliderSettings} css={S.slider}>
				<div>
					<IcLandingCardE1 width={188} height={255} />
				</div>
				<div>
					<IcLandingCardF1 width={188} height={255} />
				</div>
				<div>
					<IcLandingCardG1 width={188} height={255} />
				</div>
				<div>
					<IcLandingCardT1 width={188} height={255} />
				</div>
				<div>
					<IcLandingCardW1 width={188} height={255} />
				</div>
			</Slider>
		</div>
	);
};

export default LoadingPage;
