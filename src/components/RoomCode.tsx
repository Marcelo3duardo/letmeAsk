import copyImg from '../assets/images/copy.svg';
import {RoomCodeCss} from '../styles/roomCode';

type RoomCodeProps = {
    code: string;
}
export function RoomCode(props: RoomCodeProps) {

    function copyRoomCodeToClipBoard() {
        navigator.clipboard.writeText(props.code)
    }
    return (
        <div>
            <RoomCodeCss >
                <button className="room-code" onClick={copyRoomCodeToClipBoard}>
                    <div>
                        <img src={copyImg} alt="copy room code" />
                    </div>
                    <span>{props.code}</span>
                </button>
            </RoomCodeCss>
        </div>
    )
}
