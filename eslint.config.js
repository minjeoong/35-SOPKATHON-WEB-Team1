import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';

export default [
	// 무시할 파일/디렉토리
	{
		ignores: ['dist', 'node_modules'],
	},

	// 공통 설정
	{
		files: ['**/*.{js,jsx}'],
		languageOptions: {
			ecmaVersion: 'latest', // 최신 ECMAScript 지원
			sourceType: 'module', // ES Modules 사용
			globals: globals.browser, // 브라우저 환경 변수 활성화
			parserOptions: {
				ecmaFeatures: { jsx: true }, // JSX 활성화
			},
		},
		settings: {
			react: {
				version: 'detect', // React 버전을 자동 감지
			},
		},
		plugins: {
			react,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			prettier,
		},
		rules: {
			// 기본 ESLint 규칙
			...js.configs.recommended.rules,

			// React 관련 규칙
			...react.configs.recommended.rules,
			...react.configs['jsx-runtime'].rules,

			// React Hooks 관련 규칙
			...reactHooks.configs.recommended.rules,

			// React Refresh 관련 규칙
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true },
			],

			// Prettier 관련 규칙
			'prettier/prettier': 'warn',

			// 커스텀 규칙
			'react/react-in-jsx-scope': 'off', // React 17+에서 불필요
			'react/prop-types': 'off', // PropTypes 사용 안 함
			'react/jsx-no-target-blank': 'off', // target="_blank" 경고 비활성화
			'no-unused-vars': 'off', // 사용하지 않는 변수 허용
			'no-console': 'off', // console 사용 허용
			eqeqeq: ['warn', 'smart'], // == 사용 권장
			curly: ['warn', 'multi-line'], // 여러 줄 제어문에서 중괄호 강제
			'arrow-body-style': 'off', // 화살표 함수 스타일 강제 안 함
		},
	},
];
