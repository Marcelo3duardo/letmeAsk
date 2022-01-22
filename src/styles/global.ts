import styled from "styled-components";
export const GlobalCss = styled.html `
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}
/*parei na globlas.ts pq ele ta colocando como div ou html e esta dando um erro tenho que rever como colocar esse Style */
body{
    background: #f8f8f8;
    color: #29292e;
}

body, input, button, textarea{
    font:400 16px 'Roboto', sans-serif;
}
`;