import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin:0 ;
  padding:0;
  outline:0;
  box-sizing: border-box;
}

body {
background: #f2f2f2;
-webkit-font-smoothing: antialiased !important;
}

body, input, button {
  color: black;
}

#root{
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 20px 50px;
}

button {
  cursor: pointer;
}
`;
