module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "plugin:react/recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "quotes": ["warn", "single"],
        "semi": ["warn", "never"],
        "indent": ["error", 2],
        "react/jsx-indent": ["error", 2],
        "object-curly-spacing" : ["error", "always", {
            "objectsInObjects": true,
            "arraysInObjects": true,
        }]
    }
};