import styled from "styled-components";


export const ButtonCss = styled.div`

    .button{
    
        height: 50px;
        border-radius:6px;
        font-weight:500;
        background:${props=>props.theme.colors.primary};
        color: ${props=>props.theme.colors.text};
        padding:0 32px;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
        border: 0;

        img{
            margin-right: 8px;
        }

        &.outlined{
            background:${props=>props.theme.colors.background};
            border: 1px solid ${props=>props.theme.colors.primary};;
            color: ${props=>props.theme.colors.primary};;

        }

        &:not(:disabled):hover{//se nao estiver desabilitado
            filter: brightness(0.85);
        }

        &:disabled{
            opacity: 0.6;
            cursor: not-allowed;
        }
    }
`;