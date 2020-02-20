module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "google"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "modules": true
        }
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "arrow-body-style": ["error", "always"],
        "semi": ["error", "never"],
        "quotes": ["error", "double"],
        "max-len": [2, 120, 4, {"ignoreUrls": true}],
        "comma-dangle": ["error", "never"]
    }
};
