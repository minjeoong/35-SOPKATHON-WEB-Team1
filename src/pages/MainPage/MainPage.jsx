import * as S from './MainPage.style';
import Button from '@/components/common/Button/Button.jsx';

const MainPage = () => {
	return (
		<main css={S.MainWrap}>
			<h1 css={S.Title}>
				FORTUNE <br />
				pi
			</h1>
			<p css={S.SubTitle}>3일에 1번, 사주</p>
			<div css={S.ButtonWrap}>
				<Button variant='primary' size='large'>
					시작하기
				</Button>
			</div>
		</main>
	);
};

export default MainPage;
