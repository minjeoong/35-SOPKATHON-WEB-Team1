import * as S from '@/components/common/Button/Button.style';

const Button = ({ variant, size, children, isDisabled, onClick }) => {
	return (
		<button
			onClick={onClick}
			type='button'
			css={[S.button, S.variant(variant, isDisabled), S.size(size)]}
		>
			{children}
		</button>
	);
};

export default Button;
