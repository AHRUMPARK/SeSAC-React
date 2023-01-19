import { createGlobalStyle } from 'styled-components';

// createGlobalStyle 전역 css styled
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'ONE-Mobile-POP';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-POP.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  // 전체 페이지에 폰트 먹도록
  // 있는 순서대로 폰트가 적용됨 마지막 폰트는 기본 폰트가 되어야 함
  body {
    font-family: 'ONE-Mobile-POP', "Arial", sans-serif;
    padding-top: 1em;
    white-space: pre-wrap;
  }

  ul, ol {
    list-style: none;
    // 공간을 잡아 먹지 않도록 설정
    padding-left: 0px;
  }
`;

export default GlobalStyle;
