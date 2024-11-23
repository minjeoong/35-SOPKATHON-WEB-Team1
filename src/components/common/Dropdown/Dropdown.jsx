import { IcArrowDown, IcArrowUp } from '@/assets/svg';
import * as S from '@/components/common/Dropdown/Dropdown.style';

const Dropdown = ({
	label,
	options = [],
	isOpen,
	setIsOpen,
	onTrigger,
	selectedValue,
	placeholder,
	onSelect,
}) => {
	return (
		<div css={S.wrapper}>
			{label && (
				<label id='label' css={S.label}>
					{label}
				</label>
			)}
			{selectedValue || placeholder}
			<button onClick={onTrigger}>
				{isOpen ? (
					<IcArrowUp width={16} height={16} />
				) : (
					<IcArrowDown width={16} height={16} />
				)}
			</button>
			{isOpen && (
				<ul css={S.itemList}>
					{options.map((option, index) => (
						<li
							key={index}
							value={option}
							css={S.item}
							tabIndex={0}
							onClick={() => {
								onSelect?.(option);
								setIsOpen(false);
							}}
						>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Dropdown;
