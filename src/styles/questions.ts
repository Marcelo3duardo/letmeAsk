import styled from "styled-components";


export const QuestionCss = styled.div`
.question {
    background:${props => props.theme.colors.background};
    margin-top:7px;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    padding: 24px;

    & + .question {
        margin-top: 8px;
    }

    &.answered{
        background:${props => props.theme.colors.backDesmarcado};
        #imgCheck{
            color: ${props => props.theme.colors.primary};
            svg path{
                stroke: ${props => props.theme.colors.primary};
            }
        }
       
                color:${props => props.theme.colors.likeOff};
        
    }

    &.highlighted{
        background:${props => props.theme.colors.backHighlighted};
        border:2px solid ${props => props.theme.colors.primary};
        .user-info{
            >span{
                color:${props => props.theme.colors.textQuestion};
            }

        }
        #imgHighLight{
            color:${props => props.theme.colors.primary};
        }

    }

    p {
        color: ${props => props.theme.colors.textQuestion};
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
                    color:${props => props.theme.colors.likeOff};
                    gap:8px;

                    &.liked{
                        color:${props => props.theme.colors.primary};
                        svg path{
                            stroke:${props => props.theme.colors.primary};
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