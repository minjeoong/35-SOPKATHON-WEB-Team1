import * as S from './MainPage.style';
import Button from '@/components/common/Button/Button.jsx';
import {
	IcHomeChar1,
	IcHomeChar2,
	IcHomeChar3,
	IcHomeChar4,
	IcHomeChar5,
} from '@/assets/svg/index.jsx';

const MainPage = () => {
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
				<Button variant='primary' size='large'>
					시작하기
				</Button>
			</div>
		</main>
	);
};

export default MainPage;
