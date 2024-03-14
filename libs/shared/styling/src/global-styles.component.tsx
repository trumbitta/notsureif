import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { rootFontSizePx } from './fonts';

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: 'Arial', sans-serif;
    font-size: ${rootFontSizePx};
    padding: 4rem;
  }
`;
