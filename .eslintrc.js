module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "@typescript-eslint/eslint-plugin",
        "eslint-plugin-tsdoc"
    ],
    "rules": {
        "tsdoc/syntax": "warn"
    }
};
