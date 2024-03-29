module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        semi: ["error", "always"],
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        indent: ["error", 4],
        "eol-last": ["error", "never"],
        "linebreak-style": 0,
    },
};
