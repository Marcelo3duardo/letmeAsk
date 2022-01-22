import styled from "styled-components";


export const QuestionCss = styled.div`
.question {
    background: #fefefe;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    padding: 24px;

    & + .question {
        margin-top: 8px;
    }

    &.answered{
        background:#c2c2c2;
        #imgCheck{
            color: ${props=>props.theme.colors.primary};
            svg path{
                stroke: ${props=>props.theme.colors.primary};
            }
        }
    }

    &.highlighted{
        background: #f4f0ff;
        border:1px solid ${props=>props.theme.colors.primary};
        .user-info{
            >span{
                color:#1a1a1b;
            }

        }
        #imgHighLight{
            color:${props=>props.theme.colors.primary};
        }

    }

    p {
        color: #29292e;
    }

    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 24px;

        .D-like {

            display: flex;
            gap: 10px;
            button {
                border: 0;
                background: transparent;
                cursor: pointer;
                &.like-button {
                    display: flex;
                    align-items: flex-end;
                    color:#737380;
                    gap:8px;

                    &.liked{
                        color:${props=>props.theme.colors.primary};
                        svg path{
                            stroke:${props=>props.theme.colors.primary};
                        }
                    }
                }

                &:hover{
                    filter:brightness(0.7);
                }
            }
        }

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
                font-weight: 400;
                font-size: 12px;
            }
        }
    }
}
`;