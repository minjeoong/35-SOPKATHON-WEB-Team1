import * as React from 'react';
const SvgIcCheckFlled = (props) => (
	<svg
		viewBox='0 0 20 20'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<rect width={20} height={20} rx={4} fill='#18DC10' />
		<g clipPath='url(#clip0_82_2267)'>
			<path
				d='M4.55554 10.8571L7.66665 14.2857L15.4444 5.71429'
				stroke='white'
				strokeWidth={2}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_82_2267'>
				<rect width={14} height={12} fill='white' transform='translate(3 4)' />
			</clipPath>
		</defs>
	</svg>
);
export default SvgIcCheckFlled;
