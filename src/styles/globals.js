import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.gray900};
    color: ${({ theme }) => theme.gray50}
  } 

  body,
  input,
  button,
  textarea,
  a {
   font-family: 'Inter', sans-serif;
  }
`

export default GlobalStyles
