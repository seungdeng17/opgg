import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    font-family: 'AppleSDGothicNeo-Regular';
    position: relative;
  }
`;

export default GlobalStyles