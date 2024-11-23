import * as S from './MainPage.style';
import Button from '@/components/common/Button/Button.jsx';

const MainPage = () => {
	return (
		<main css={S.MainWrap}>
			<h1>메인 페이지</h1>
			<p>메인 페이지입니다.</p>
			<div css={S.ButtonWrap}>
				<Button variant='primary' size='large'>
					시작하기
				</Button>
			</div>
		</main>
	);
};

export default MainPage;
