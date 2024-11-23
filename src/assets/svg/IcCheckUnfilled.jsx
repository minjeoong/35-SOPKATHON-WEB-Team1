import * as React from 'react';
const SvgIcCheckUnfilled = (props) => (
	<svg
		viewBox='0 0 20 20'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<rect
			x={0.5}
			y={0.5}
			width={19}
			height={19}
			rx={3.5}
			fill='#EFF1F2'
			stroke='#C1C7CF'
		/>
		<g clipPath='url(#clip0_82_2264)'>
			<path
				d='M4.55566 10.8572L7.66678 14.2858L15.4446 5.71436'
				stroke='#C1C7CF'
				strokeWidth={2}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_82_2264'>
				<rect width={14} height={12} fill='white' transform='translate(3 4)' />
			</clipPath>
		</defs>
	</svg>
);
export default SvgIcCheckUnfilled;
