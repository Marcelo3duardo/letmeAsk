import styled from "styled-components";


export const PageRoom = styled.div`
header {
    padding: 24px;
    border-bottom: 1px solid #e2e2e2;

    .content {
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        .logoImg {
            max-height: 45px;
            
            svg {
                max-height:60px;
                path{
                stroke: ${props => props.theme.colors.logoImg};
                }
            }
        }

        #exitRoom {
            width: 32px;
            border: none;
            background: transparent;
            > img {
                height: 32px;
                align-items: center;
                margin-left: 15px;
                margin-top: 5px;
                cursor: pointer;
            }
        }

        > div {
            display: flex;
            gap: 16px;

            > button {
                height: 48px;
            }
        }
    }
}

main {
    max-width: 800px;
    margin: 0 auto;

    .room-title {
        margin: 32px 0 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .aux{
            display: flex;
            align-items: center;

            h1 {
                font-family: "Poppins", sans-serif;
                font-size: 24px;
                color: ${props => props.theme.colors.text};
            }

            > span {
                margin-left: 16px;
                background: ${props => props.theme.colors.span};
                border-radius: 999px;
                padding: 8px 16px;
                color: ${props => props.theme.colors.spanText};
                font-weight: 500;
                font-size: 14px;
            }
        }
    }

    form {
        textarea {
            width: 100%;
            border: 0;
            padding: 16px;
            border-radius: 8px;
            background: ${props => props.theme.colors.background};
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
            resize: vertical;
            min-height: 130px;
            color: ${props => props.theme.colors.textBody};
        }

        .form-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 16px;

            .user-info {
                display: flex;
                align-items: center;

                > img {
                    width: 32px;
                    height: 32px;
                    border-radius: 30%;
                }
                > span {
                    margin-left: 5px;
                }
            }

            > span {
                font-size: 14px;
                color: #737380;
                font-weight: 500;
                background: transparent;

                > button {
                    background: transparent;
                    border: 0;
                    color: ${props => props.theme.colors.primary};
                    cursor: pointer;
                }
            }
        }

        .question-list {
            margin-top: 32px;
        }
    }
}

> footer {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;
    margin: 35px 0 10px 0;
}
}

@media (max-width: 850px) {

    header {
        padding: 24px;
        border-bottom: 1px solid #e2e2e2;

        .content {
            max-width: 1120px;
            margin: 0 auto;
            display: flex;
            justify-content: center;

            > img {
                margin-right: 16px;
            }
        }
    }
    main {
        max-width: 85%;
        .room-title {
            margin: 32px 0 24px;
            display: flex;
            align-items: center;

            h1 {
                margin-left: 32px;
            }
        }
        //parei aqui- nao consegui redimensionar o width
    }

`;