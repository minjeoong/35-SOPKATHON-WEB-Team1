import * as S from '@/components/common/Button/Button.style';

const Button = ({ variant, size, children, isDisabled }) => {
	return (
		<button
			type='button'
			css={[S.button, S.variant(variant, isDisabled), S.size(size)]}
		>
			{children}
		</button>
	);
};

export default Button;
