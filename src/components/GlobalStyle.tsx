import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu', sans-serif;
  }
  #root {
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle