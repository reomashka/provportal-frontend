// @ts-check
import js from '@eslint/js';
import ts from 'typescript-eslint';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default ts.config(
	js.configs.recommended,
	...ts.configs.recommended,
	{
		files: ['**/*.{ts,tsx}'],
		plugins: {
			'react-hooks': reactHooks,
		},
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				ecmaVersion: 'latest',
				sourceType: 'module',
				project: './tsconfig.json',
			},
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
			...reactRecommended.rules,
			...reactHooks.configs.recommended.rules,
			'react/jsx-uses-react': 'off',
			'react/react-in-jsx-scope': 'off',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
			],
			'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
		},
	},
	{
		ignores: [
			'**/dist/**',
			'**/node_modules/**',
			'**/.next/**',
			'**/out/**',
			'**/.vercel/**',
			'**/.eslintrc.js',
		],
	},
	prettier,
);
