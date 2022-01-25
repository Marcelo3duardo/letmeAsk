import styled from "styled-components";


export const RoomCodeCss = styled.div`

    .room-code {
        height: 40px;
        border-radius: 8px;
        overflow: hidden;

        background: ${props=>props.theme.colors.background};
        border: 2px solid ${props=>props.theme.colors.primary};
        cursor: pointer;

        display: flex;

        div {
            height: 55px;
            width:55px;
            background: ${props=>props.theme.colors.primary};
            padding:0 0 8px 12px;
            display: flex;
            align-items: center;
            
        }

        span {
            display: block;
            align-self: center;
            flex: 1;
            padding: 0 16px 0 12px;
            width: 240px;
            font-size: 14px;
            font-weight: 500;
            color: ${props => props.theme.colors.text};
        }

        img {
            align-self: center;
            padding: 9px 6px;
        }
    }
`;