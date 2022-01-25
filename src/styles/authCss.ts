import styled from "styled-components";


export const PageAuth = styled.div`

    display: flex;
    align-items: stretch;
    height: 100vh;
    aside {
        flex: 7;
        background: ${props => props.theme.colors.backgroundMenu};
        //background: #865afd;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 120px 80px;
        img {
            max-width: 320px;
        }

        strong {
            font: 700 26px "Poppins", sans-serif;
            line-height: 42px;
            margin-top: 16px;
        }

        p {
            font-size: 24px;
            line-height: 32px;
            margin-top: 16px;
            color: #f8f8f8;
        }
    }

    main {
        flex: 8;
        background:${props => props.theme.colors.backCreatRoom};
        padding: 0 32px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .main-content {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 320px;
        align-items: stretch;
        text-align: center;
      

        > img {
            align-self: center;
        }

        h2 {
            font-size: 24px;
            margin: 64px 0 24px 0;
            font-family: "Poppins", sans-serif;
        }

        form {
            input {
                height: 50px;
                border-radius: 8px;
                padding: 0 16px;
                background: #ffffff;
                border: 1px solid #a8a8b3;
            }
            button {
                margin-top: 16px;
            }
            button,
            input {
                width: 100%;
            }
        }

        > p {
            font-size: 12px;
            margin-top: 5px;
        }
    }

    .creat-room {
        margin-top: 64px;
        height: 50px;
        border-radius: 6px;
        font-weight: 500;
        background: ${props => props.theme.colors.backGoogle};
        color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
        border: 0;

        > p {
            margin-left: 10px;
        }

        &:hover {
            filter: brightness(0.85);
        }
    }

    .separator {
        font-size: 14px;
        p:first-of-type{
            color: ${props=> props.theme.colors.textBody};
        }
       

        margin: 32px 0;
        display: flex;
        align-items: center;

        &::before {
            content: "";
            flex: 1;
            height: 1px;
            background: #a8a8b3;
            margin-right: 16px;
        }

        &::after {
            content: "";
            flex: 1;
            height: 1px;
            background: #a8a8b3;
            margin-left: 16px;
        }
    }

    @media (max-width: 790px) {
   
        aside {
            display: none;
        }

        main {
           background:${props => props.theme.colors.backCreatRoom};
            // background: ${props => props.theme.colors.span};
        }
        .separator{
            color: white;
        }
    

}
`;
