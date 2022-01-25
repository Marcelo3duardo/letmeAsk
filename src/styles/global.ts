
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export default createGlobalStyle  `
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}
body{
    background:  ${(props) => props.theme.colors.backBody};
    color: ${(props) => props.theme.colors.textBody};
}

body, input, button, textarea{
    font:400 16px 'Roboto', sans-serif;
}
`;