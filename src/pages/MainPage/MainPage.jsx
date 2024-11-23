import * as S from './MainPage.style';
import Button from '@/components/common/Button/Button.jsx';
import {
	IcHome,
	IcHomeChar1,
	IcHomeChar2,
	IcHomeChar3,
	IcHomeChar4,
	IcHomeChar5,
} from '@/assets/svg/index.jsx';
import { useNavigate, useNavigation } from 'react-router-dom';

const MainPage = () => {
	const navigate = useNavigate();

	return (
		<main css={S.MainWrap}>
			<h1 css={S.Title}>
				FORTUNE <br />
				pi
			</h1>
			<p css={S.SubTitle}>3일에 1번, 사주</p>
			<section css={S.CharWrap}>
				<IcHomeChar1 css={S.Char1} />
				<IcHomeChar2 css={S.Char2} />
				<IcHomeChar3 css={S.Char3} />
				<IcHomeChar4 css={S.Char4} />
				<IcHomeChar5 css={S.Char5} />
			</section>
			<div css={S.ButtonWrap}>
				<Button
					variant='primary'
					size='large'
					onClick={() => navigate('/info')}
				>
					시작하기
				</Button>
				{/*<Button variant='feedback' size='small'>*/}
				{/*	평가 제출하기*/}
				{/*</Button>*/}
				{/*<Button variant='thankyou' size='small'>*/}
				{/*	평가 제출하기*/}
				{/*</Button>*/}
				{/*<Button*/}
				{/*	variant='togoHome'*/}
				{/*	size='large'*/}
				{/*	onClick={() => navigate('/info')}*/}
				{/*>*/}
				{/*	<IcHome />*/}
				{/*	처음으로 돌아가기*/}
				{/*</Button>*/}
			</div>
		</main>
	);
};

export default MainPage;
