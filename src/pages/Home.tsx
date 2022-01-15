
import { useNavigate } from 'react-router-dom';
import { FormEvent, useState } from 'react';

//import {auth, firebase} from '../services/firebase';
import illuminationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import { Button } from '../components/Button';
import '../styles/auth.scss';//so eh usada pela pagina home

import { useAuth } from '../hooks/useauth';
import { } from '../../node_modules/firebase/database'
import firebase from 'firebase';
import { database } from '../services/firebase';



export function Home() {
    const navigate = useNavigate();
    const { user, signInWithGoogle } = useAuth();
    const [roomCode, setRoomCode] = useState('');

    async function handleCreatRoom() {
        if (!user) {
            await signInWithGoogle();//retirei o await
        }

        navigate('/rooms/new');
    }

    async function handleJoinRoom(this: any, event: FormEvent) {
        event.preventDefault();//prevenir o que quando haja o click a pagina nao recarregue

        if (roomCode.trim() == '') {
            return;
        }
        const roomRef = await firebase.database().ref(`rooms/${roomCode}`);
        //nao consegui verificar se a sala doi apagada


        roomRef.on('value', (snapshot) => {
            const existente = snapshot.exists();
            if (!existente) {
               alert("not exists!");
                return;
            } else {
                alert("exists!");

                navigate(`rooms/${roomCode}`);
            }


        })

    }



    return (
        <div id="page-auth" >
            <aside>
                <img src={illuminationImg} alt="pergunta e respostas" />
                <strong>Cire salas de Q&amp;A ao-vivo</strong>
                <p>Tire as duvidas da sua audiência em tempo real</p>

            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="letmeAsk" />
                    <button type="button" onClick={handleCreatRoom} className="creat-room">
                        <img src={googleIconImg} alt="Logo do google" />
                        <p>Crie sua sala com o Google</p>
                    </button>
                    <div className="separator">
                        ou entre em uma sala
                    </div>
                    <form onSubmit={handleJoinRoom} >
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                            onChange={event => setRoomCode(event.target.value)}
                            value={roomCode}
                        />
                        <Button type="submit">Entrar na sala</Button>
                    </form>

                </div>
            </main>
        </div>
    )
}