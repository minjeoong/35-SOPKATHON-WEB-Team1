import { IcBtnArrowLeft } from '@/assets/svg';
import * as S from './Header.style';

const Header = ({ children }) => {
  return (
    <div css={S.backgroundStyle}>
      <div css={S.headerStyle}>
        <IcBtnArrowLeft css={S.iconStyle} />
        <h1 css={S.titleStyle}>{children}</h1>
      </div>
    </div>
  );
};

export default Header;
