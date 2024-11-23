import { useNavigate } from 'react-router-dom';
import { IcBtnArrowLeft } from '@/assets/svg';
import * as S from './Header.style';

const Header = ({ children }) => {
	const navigate = useNavigate();

	const handleBack = () => {
		navigate(-1);
	};

	return (
		<header css={S.backgroundStyle}>
			<div css={S.headerStyle}>
				<IcBtnArrowLeft css={S.iconStyle} onClick={handleBack} />
				<h1 css={S.titleStyle}>{children}</h1>
			</div>
		</header>
	);
};

export default Header;
