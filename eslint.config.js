import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
// правильный импорт парсера TS 😑
import tsParser from '@typescript-eslint/parser';
// prettier отключает правила, конфликтующие с форматтером
import prettierConfig from 'eslint-config-prettier/flat';
import jsxA11y from 'eslint-plugin-jsx-a11y';
// плагины
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

export default [
	// базовые правила ESLint
	js.configs.recommended,

	// базовые настройки TS + JSX + плагины
	{
		files: ['**/*.{js,jsx,ts,tsx}'],

		languageOptions: {
			// ✨ подключаем парсер правильно
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: { jsx: true },
			},
			globals: {
				...globals.browser,
				...globals.node,
			},
		},

		plugins: {
			react,
			'react-hooks': reactHooks,
			'jsx-a11y': jsxA11y,
			'@typescript-eslint': tsPlugin,
			'simple-import-sort': simpleImportSort,
		},

		rules: {
			// react базовые
			'react/react-in-jsx-scope': 'off',
			'react/prop-types': 'off',
			'react/jsx-key': 'warn',

			// хуки
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',

			// TS
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'off',

			// сортировка импортов
			'simple-import-sort/imports': 'warn',
			'simple-import-sort/exports': 'warn',
		},

		settings: {
			react: { version: 'detect' },
		},
	},

	prettierConfig,

	{
		ignores: ['node_modules/**', 'dist/**', 'build/**'],
	},
];
