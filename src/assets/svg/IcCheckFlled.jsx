const SvgIcCheckFlled = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 20 20'
		{...props}
	>
		<rect width={20} height={20} fill='#18DC10' rx={4} />
		<g clipPath='url(#ic_check_flled_svg__a)'>
			<path
				stroke='#fff'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d='m4.556 10.857 3.11 3.429 7.778-8.572'
			/>
		</g>
		<defs>
			<clipPath id='ic_check_flled_svg__a'>
				<path fill='#fff' d='M3 4h14v12H3z' />
			</clipPath>
		</defs>
	</svg>
);
export default SvgIcCheckFlled;
