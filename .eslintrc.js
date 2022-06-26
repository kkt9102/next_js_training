module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        quotes: ["error","double"], // 더블 쿼터 사용
        "@typescript-esline/quotes": ["error","double"],    // 더블 쿼터 사용
        "no-unsed-vars": "off", // 사용 안 한 변수 경고 중복
        "spaced-comment": "off",    // 주석을 뒤에 쓰지 말라는 경고
        "@typescript-eslint/no-unsed-vars": "warn", // 사용 안 한 변수는 경고
        "jsx-ally/control-has-associated-bale": "off",  // 상호작용하는 앨리먼트에 label을 넣는ㄷ
        "react/no-array-index-key": "off", // key값으로 index 사용 불가
        "comma-dangle": "off", // 마지막에 ,를 넣어주지 않는다
        "arrow-body-style": "off", // 화살표 함수 안에 retrun 을 사용할 수 없다
        "react/no-unescaped-entities": "off",   // 문자열 내에서 " ' > ) 허용
        "rext/prop-types": "off",   // proptypes 를 사용하지 않는다
        "object-curly-newline": "off", // { 다음 줄바꿈을 강제로 허용하지 않음
        "react/jsx-one-expression-per-line": "off", // 한 라인에 여러개의 jsx를 사용할 수 있다.
        "implicit-arrow-linebreak": "off",  // 화살표 함수 다음에 줄바꿈을 사용할 수 있다.
        "no-shadow": "off", // 파일 내에서 중복 이름을 사용할 수 있다.
        "operator-linebreak": "off",    // 연산자 다음 줄바꿈을 사용할 수 있다.
        "react/react-in-jsx-scope": "off",  // jsx를 사용해도 React를 꼭 import 하지 않아도 된다.
        "react/jsx-props-no-spreading": "off",  // props를 스프레드 할 수 없다.
        "jsx-ally/anchor-is-valid": "off",  // next.js 에서는 a 앨리먼트에 href없이 사용
        "global-require": "off",    // 함수 내에서 require 사용 가능
        "no-use-before-define": "off",  // 선언 전에 사용하지 말기
        "import/prefer-default-export": "off",  // export default 권장
        "on-param-reassign": "off", // param assign 하지 않기
        "jsx-ally/label-has-associated-control": "off",
        "no-invalud-css": "off",
        "react/jsx-curly-newline": "off",
        indent: "off",
        "react/jsx-filename-extension": [
            1,
            { extensions: ["js", "jsx", ".tsx"]}  // jsx 사용 가능한 확장자 설정
        ],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            },  // import 시 확장자명 사용 안함
        ],
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: ["js", "jsx", "ts", ".tsx", ".d.ts"],
            },
        },
    },
};
