import { IcCheckFlled, IcCheckUnselect } from '@/assets/svg/index.jsx';
import * as S from '@/components/common/CheckBox/CheckBox.style';

const CheckBox = ({ isChecked, onClick }) => {
	return (
		<div css={S.CheckBoxWrap}>
			{isChecked ? (
				<IcCheckFlled onClick={onClick} />
			) : (
				<IcCheckUnselect onClick={onClick} />
			)}
		</div>
	);
};

export default CheckBox;
