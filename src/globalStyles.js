import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    position: relative;
    -webkit-overflow-scrolling: touch;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    background-color: #ffffff;
    -webkit-overflow-scrolling: touch;
    touch-action: manipulation;
  }

  #root {
    min-height: 100%;
    position: relative;
  }

  /* 모바일 터치 하이라이트 제거 */
  * {
    -webkit-tap-highlight-color: transparent;
  }

  /* 모바일 텍스트 선택 방지 */
  * {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* 입력 필드는 선택 가능하도록 설정 */
  input, textarea {
    -webkit-user-select: auto;
    -khtml-user-select: auto;
    -moz-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }

  /* iOS 모멘텀 스크롤 활성화 */
  * {
    -webkit-overflow-scrolling: touch;
  }
`;

export default GlobalStyle; 