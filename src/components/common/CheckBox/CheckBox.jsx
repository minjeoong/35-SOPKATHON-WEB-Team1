import { IcCheckFlled, IcCheckUnfilled } from '@/assets/svg';
import * as S from '@/components/common/CheckBox/CheckBox.style';

const CheckBox = ({ isChecked, onClick }) => {
	return (
		<div css={S.CheckBoxWrap}>
			{isChecked ? (
				<IcCheckFlled onClick={onClick} />
			) : (
				<IcCheckUnfilled onClick={onClick} />
			)}
		</div>
	);
};

export default CheckBox;
