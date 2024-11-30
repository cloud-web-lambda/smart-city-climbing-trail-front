import js from "@eslint/js";
import imports from "eslint-plugin-import";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import reactPlugin from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";
import router from "@tanstack/eslint-plugin-router";
import query from "@tanstack/eslint-plugin-query";

export default tseslint.config(
	{ ignores: ["dist", "node_modules"] },
	prettier,
	router.configs["flat/recommended"],
	query.configs["flat/recommended"],
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			...jsxA11y.flatConfigs.recommended.languageOptions,
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
			imports,
			react: reactPlugin,
			"jsx-a11y": jsxA11y,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			...reactPlugin.configs.flat.recommended.rules,
			...jsxA11y.flatConfigs.recommended.rules,
			"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
			"react/jsx-uses-react": "off",
			"react/react-in-jsx-scope": "off",
			"@typescript-eslint/no-unused-vars": ["error", { ignoreRestSiblings: true }],
			"@typescript-eslint/no-array-constructor": "error",
			"@typescript-eslint/no-duplicate-enum-values": "error",
			"@typescript-eslint/no-explicit-any": "error",
			"@typescript-eslint/no-extra-non-null-assertion": "error",
			"@typescript-eslint/no-empty-object-type": "off",
			"no-loss-of-precision": "off",
			"@typescript-eslint/no-loss-of-precision": "error",
			"@typescript-eslint/no-misused-new": "error",
			"@typescript-eslint/no-namespace": "error",
			"@typescript-eslint/no-non-null-asserted-optional-chain": "error",
			"@typescript-eslint/no-this-alias": "error",
			"@typescript-eslint/no-unnecessary-type-constraint": "error",
			"@typescript-eslint/no-unsafe-declaration-merging": "error",
			"@typescript-eslint/no-var-requires": "error",
			"@typescript-eslint/prefer-as-const": "error",
			"@typescript-eslint/triple-slash-reference": "error",
			"react/prop-types": "off",
			"no-async-promise-executor": "warn",
			"@typescript-eslint/no-inferrable-types": "warn",
			"@typescript-eslint/naming-convention": [
				"error",
				{
					format: ["camelCase", "UPPER_CASE", "PascalCase"],
					selector: "variable",
					leadingUnderscore: "allow",
				},
				{
					format: ["camelCase", "PascalCase"],
					selector: "function",
				},
				{
					format: ["PascalCase"],
					selector: "interface",
				},
				{
					format: ["PascalCase"],
					selector: "typeAlias",
				},
			],
			"@typescript-eslint/array-type": [
				"error",
				{
					default: "array-simple",
				},
			],
			"no-restricted-imports": [
				"error",
				{
					paths: [
						{
							name: "util",
							importNames: ["isArray"],
							message: "`Array.isArray`를 대신 사용해주세요!",
						},
					],
				},
			],
			"@typescript-eslint/member-ordering": [
				"error",
				{
					default: [
						"public-static-field",
						"private-static-field",
						"public-instance-field",
						"private-instance-field",
						"public-constructor",
						"private-constructor",
						"public-instance-method",
						"private-instance-method",
					],
				},
			],
			"jsx-a11y/label-has-associated-control": [
				"error",
				{
					labelComponents: ["label"],
					labelAttributes: ["htmlFor"],
					controlComponents: ["input"],
				},
			],
			"prefer-const": "error",
			"no-var": "error",
			eqeqeq: [
				"error",
				"always",
				{
					null: "ignore",
				},
			],
			"imports/no-duplicates": "error",
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "error",
			"react/jsx-no-target-blank": "error",
			"sort-imports": [
				"error",
				{
					ignoreCase: true,
					ignoreDeclarationSort: true,
					ignoreMemberSort: false,
					allowSeparatedGroups: true,
				},
			],
			"imports/order": [
				"error",
				{
					groups: [["builtin", "external"], ["internal", "parent", "sibling"], ["index", "object", "type"], "unknown"],
					pathGroups: [
						{
							pattern: "{react,react-dom,react-dom/*}",
							group: "external",
							position: "before",
						},
						{
							pattern: "{@/app/**,@/app}",
							group: "internal",
							position: "before",
						},
						{
							pattern: "{@/pages/**,@/pages}",
							group: "internal",
							position: "before",
						},
						{
							pattern: "{@/widgets/**,@/widgets}",
							group: "internal",
							position: "before",
						},
						{
							pattern: "{@/features/**,@/features}",
							group: "internal",
							position: "before",
						},
						{
							pattern: "{@/entities/**,@/entities}",
							group: "internal",
							position: "before",
						},
						{
							pattern: "{@/shared/**,@/shared}",
							group: "internal",
							position: "before",
						},
						{
							pattern: "{./*.module.scss,../**/*.module.scss,./*.scss,../**/*.scss}",
							group: "unknown",
						},
					],
					pathGroupsExcludedImportTypes: ["react", "@/*"],
					"newlines-between": "always",
					alphabetize: {
						order: "asc",
						caseInsensitive: true,
					},
				},
			],
		},
		settings: {
			"imports/resolver": {
				typescript: {
					alwaysTryTypes: true,
				},
			},
			react: {
				version: "detect",
			},
		},
	},
);
