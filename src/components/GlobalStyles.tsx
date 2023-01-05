import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  body{
    min-height:100vh;
    overflow-x: hidden;
  }
  button{
    background-color: transparent;
    border:none;
    font:inherit;
  }
  a{
    text-decoration:none;
    display:inline-block;
  }
  ul{
    list-style-type: none;
  }
  input, textarea{
    display:block;
    width:100%;
    font:inherit;
  }
`;

export default GlobalStyle;
