const { root } = require("postcss");

module.exports = {

	root: true,

	parser: "@typescript-eslint/parser",

	globals: { angular: false, 
		module: false, 
		inject: false, 
		document: false },
	env: { browser: true, es2020: true, node: true },
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
		"plugin:@typescript-eslint/recommended-type-checked",
		"prettier",
		"plugin:tailwindcss/recommended"
	],
	parserOptions: {
		project: "./tsconfig.json"
	  },
	settings: { react: { version: "18.2" } },
	plugins: ["react-refresh","@typescript-eslint"],
	rules: {
		"react-refresh/only-export-components": "warn",
		"react/jsx-filename-extension": [
			"error",
			{ extensions: [".js", ".jsx", ".tsx"] },
		],
		"react/jsx-props-no-spreading": "off",
		"react/prop-types": "off",
		"@typescript-eslint/await-thenable": "error"
	},
	ignorePatterns: ["tailwind.config.ts"],
};